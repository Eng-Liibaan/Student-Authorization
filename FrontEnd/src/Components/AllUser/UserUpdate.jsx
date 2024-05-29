import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../pages/Login";
import cookie from "universal-cookie";
export const UserUpdate = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let Cookie = new cookie();
  const UserData = Cookie.get("UserData");
  let UserExist = UserData.filter((data) => data._id === id)[0];
  const { Role, UserName, Email, Status } = UserExist;

  const [User, setUser] = useState({
    Role: Role,
    UserName: UserName,
    Email: Email,
    Status: Status,
  });
  const HandleLogin = async (e) => {
    e.preventDefault();
    let { data } = await axios.put(`${endpoint + "/user"}/${id}`, User);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  bg-info"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Update User</strong>
          <Link
            to="/User"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={HandleLogin}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your UserName"
                  value={User.UserName}
                  onChange={(e) =>
                    setUser({
                      UserName: e.target.value,
                      Role: User.Role,
                      Status: User.Status,
                      Email: User.Email,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={User.Role}
                  onChange={(e) =>
                    setUser({
                      Role: e.target.value,
                      UserName: User.UserName,
                      Status: User.Status,
                      Email: User.Email,
                    })
                  }
                >
                  <option value="">Choose Role</option>
                  <option value="true">Admin</option>
                  <option value="false">User</option>
                </select>
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  value={User.Email}
                  placeholder="Enter Your Email"
                  onChange={(e) =>
                    setUser({
                      Email: e.target.value,
                      Role: User.Role,
                      Status: User.Status,
                      UserName: User.UserName,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={User.Status}
                  onChange={(e) =>
                    setUser({
                      Status: e.target.value,
                      Role: User.Role,
                      UserName: User.UserName,
                      Email: User.Email,
                    })
                  }
                >
                  <option value="">Choose Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
