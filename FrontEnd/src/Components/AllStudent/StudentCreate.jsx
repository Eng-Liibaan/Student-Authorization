import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { endpoint } from "../../pages/Login";
export const StudentCreate = () => {
  let navigate = useNavigate();
  const [User, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Gender: "",
    Address: "",

  });

  const HandleLogin = async (e) => {
    e.preventDefault();




    let { data } = await axios.post(endpoint + "/student/signup", User);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/Student");
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
        style={{ width: "450px", borderRadius: "12px", height: "440px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Create Student</strong>
          <Link
            to="/Student"
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
                  value={User.Name}
                  onChange={(e) =>
                    setUser({
                      Name: e.target.value,
                      Email: User.Email,
                      Phone: User.Phone,
                      Gender: User.Gender,
                      Address: User.Address,
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
                      Name: User.Name,
                      Phone: User.Phone,
                      Gender: User.Gender,
                      Address: User.Address,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Phone"
                  value={User.Phone}
                  onChange={(e) =>
                    setUser({
                      Phone: e.target.value,
                      Email: User.Email,
                      Name: User.Name,
                      Gender: User.Gender,
                      Address: User.Address,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={User.Gender}
                  onChange={(e) =>
                    setUser({
                      Gender: e.target.value,
                      Name: User.Name,
                      Phone: User.Phone,
                      Email: User.Email,
                      Address: User.Address,
                    })
                  }
                >
                  <option value="">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="form-control mt-4"
                  value={User.Address}
                  onChange={(e) =>
                    setUser({
                      Address: e.target.value,
                      Email: User.Email,
                      Phone: User.Phone,
                      Gender: User.Gender,
                      Name: User.Name,
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
