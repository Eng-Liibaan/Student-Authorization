import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../pages/Login";
import cookie from "universal-cookie";
export const ChangeProfile = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let Cookie = new cookie();

  const { user } = Cookie.get("user");

  let UserData =
    JSON.parse(localStorage.getItem("AllUser")) &&
    JSON.parse(localStorage.getItem("AllUser"));

  let ImageRef = useRef(null);

  const [User, setUser] = useState({
    UserName: user.UserName,
    Email: user.Email,
    Profile: "",
  });

  const HandleLogin = async (e) => {
    e.preventDefault();
    const Formdata = new FormData();

    Formdata.append("UserName", User.UserName);
    Formdata.append("Email", User.Email);
    Formdata.append("Profile", User.Profile);
    let { data } = await axios.put(
      `${endpoint + "/user/Profile"}/${id}`,
      Formdata
    );

    if (data.status === "Success") {
      toast.success(data.message);
      localStorage.clear();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center login  bg-info"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "430px" }}
      >
        <div>
          <Link
            to="/UserDashboard"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>
        <div>
          {User.Profile ? (
            <img className="image" src={URL.createObjectURL(User.Profile)} />
          ) : (
            <img
              className="image"
              src={`http://localhost:3000/images/` + user.Avator}
              alt=""
            />
          )}
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
                <input
                  type="file"
                  ref={ImageRef}
                  className="form-control mt-4"
                  onChange={(e) =>
                    setUser({
                      Profile: e.target.files[0],
                      UserName: User.UserName,
                      Email: User.Email,
                    })
                  }
                />
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
