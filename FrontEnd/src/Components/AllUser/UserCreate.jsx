import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { endpoint } from "../../pages/Login";
export const UserCreate = () => {
  let navigate = useNavigate();
  let ImageRef = useRef();
  const [User, setUser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Profile: '',
  });
  const HandleLogin = async (e) => {
    e.preventDefault();
    
    const Formdata=new FormData()
    Formdata.append("UserName",User.UserName)
    Formdata.append("Email",User.Email)
    Formdata.append("Profile",User.Profile)
    Formdata.append("Password",User.Password)
    let { data } = await axios.post(endpoint+'/user/signup',Formdata);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/User");
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
          <strong className="ms-5">Create User</strong>
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
                  placeholder="Enter Your Name"
                  value={User.UserName}
                  onChange={(e) =>
                    setUser({
                        UserName: e.target.value,
                      Email: User.Email,
                      Password: User.Password,
                      Profile: User.Profile,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your E-mail"
                  value={User.Email}
                  onChange={(e) =>
                    setUser({
                      Email: e.target.value,
                      UserName: User.UserName,
                      Password: User.Password,
                      Profile: User.Profile,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={User.Password}
                  onChange={(e) =>
                    setUser({
                      Password: e.target.value,
                      Email: User.Email,
                      UserName: User.UserName,
                      Profile: User.Profile,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="file"
                  className="form-control mt-4"
                  ref={ImageRef}
                  onChange={(e) =>
                    setUser({
                      Profile: e.target.files[0],
                      Email: User.Email,
                      UserName: User.UserName,
                      Password: User.Password,
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
