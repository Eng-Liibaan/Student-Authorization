import axios from "axios";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { endpoint } from "../../pages/Login";
export const ReceiptCreate = () => {
  let navigate = useNavigate();
  const [User, setUser] = useState({
    Name: "",
    Email: "",
    ClassName: "",
    ReceiptAmount: "",
  });

  const HandleLogin = async (e) => {
    e.preventDefault();

    let lii = parseFloat(User.ReceiptAmount);

    let obj = {
      Name: User.Name,
      Email: User.Email,

      ClassName: User.ClassName,

      ReceiptAmount: lii,
    };

    let { data } = await axios.post(endpoint + "/receipt/signup", obj);
    if (data.status === "Success") {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/Receipt");
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
          <strong className="ms-5">Create Receipt</strong>
          <Link
            to="/Receipt"
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
                      Name: User.Name,
                      ClassName: User.ClassName,
                      ReceiptAmount: User.ReceiptAmount,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your StudentName"
                  value={User.Name}
                  onChange={(e) =>
                    setUser({
                      Name: e.target.value,
                      Email: User.Email,
                      ClassName: User.ClassName,
                      ReceiptAmount: User.ReceiptAmount,
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
                      Email: User.Email,
                      Name: User.Name,
                      ReceiptAmount: User.ReceiptAmount,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  placeholder="Enter Your ReceiptAmount"
                  className="form-control mt-4"
                  value={User.ReceiptAmount}
                  onChange={(e) =>
                    setUser({
                      ReceiptAmount: e.target.value,
                      Email: User.Email,
                      Name: User.Name,
                      ClassName: User.ClassName,
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
