import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endpoint } from "../../pages/Login";
import cookie from 'universal-cookie'
import axios from "axios";
export const ClassUpdate = () => {
  let Cookie=new cookie()
  let { id } = useParams();
  let navigate = useNavigate();
  let ClassData=Cookie.get('ClassData')
  let ClassExist = ClassData.filter((data) => data._id === id)[0];

  const { Email, ClassName, ClassStatus } = ClassExist;

  const [User, setUser] = useState({
    Email: Email.Email,
    ClassName: ClassName,
    ClassStatus: ClassStatus,
  });

  const HandleLogin = async (e) => {
    e.preventDefault();

    let { data } = await axios.put(`${endpoint + "/class"}/${id}`, User);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/class");
      }, 3000);
    } else {
      toast.error(data);
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
          <strong className="ms-5">Update Class</strong>
          <Link
            to="/Class"
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
                  placeholder="Enter Your E-mail"
                  value={User.Email}
                  onChange={(e) =>
                    setUser({
                      Email: e.target.value,
                      ClassStatus: User.ClassStatus,
                      ClassName: User.ClassName,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your ClassName"
                  value={User.ClassName}
                  onChange={(e) =>
                    setUser({
                      ClassName: e.target.value,
                      ClassStatus: User.ClassStatus,
                      Email: User.Email,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={User.ClassStatus}
                  onChange={(e) =>
                    setUser({
                      ClassStatus: e.target.value,
                      ClassName: User.ClassName,
                      Email: User.Email,
                    })
                  }
                >
                  <option value="">Choose Role</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Blcoked">Blcoked</option>
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
