import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../index.css";

export const AdminDashboard = () => {
  const { ClassApi, UserApi, StudentApi, ReceiptApi } = UseApiData();
  const Handle = () => {
    let user = document.querySelector(".user");
    user.classList.toggle("open");
  };
  const SingleDashboard = () => {
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.toggle("open");
  };
  return (
    <div className="row">
      <div className="col-3 ">
        <div className="user">
          <TiThMenu className="iconMenu" onClick={Handle} />
          {/* <Link  className="bg">
            <img
             
              className="image"
              src={`http://localhost:3000/images/` + user.Avator}
              alt=""
            />
          </Link> */}
          {/* <Link
            to="/AdminDashboard "
            className="bg-white text-danger "
            style={{ lineHeight: "45px" }}
          >
            {user.UserName}
          </Link> */}
          <Link to="/Student">Student</Link>
          <Link to="/Class">Class</Link>
          <Link to="/User">User</Link>
          <Link to="/Receipt">Payment</Link>
        </div>
      </div>
      <div className="col counter mt-5">
        <div className="count text-center text-white  ">
          Student
          <div className="text-white fs-2">{StudentApi.length}</div>
        </div>
        <div className="count text-center text-white  ">
          User
          <div className="text-white fs-2">{UserApi.length}</div>
        </div>
        <div className="count text-center text-white  ">
          Class
          <div className="text-white fs-2">{ClassApi.length}</div>
        </div>
        <div className="count text-center text-white  ">
          Receipt
          <div className="text-white fs-2">{ReceiptApi.length}</div>
        </div>
      </div>
    </div>
  );
};
