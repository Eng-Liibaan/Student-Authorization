import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../index.css";
import { useEffect } from "react";
import { SingleDash } from "./SingleDashboard";
import { ClassTable } from "./AllTable/ClassTable";
import { StudentTable } from "./AllTable/StudentTable";
import { UserTable } from "./AllTable/UserTable";
import cookie from 'universal-cookie'
export const UserDashboard = () => {
 let navigate=useNavigate()
 let Cookie=new cookie()
 let {user}=Cookie.get('user')
  useEffect(() => {
    navigate("/UserDashboard");
  }, [navigate]);
  const Handle = () => {
    let user = document.querySelector(".user");
    user.classList.toggle("open");
  };
  const SingleDashboard = () => {
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.toggle("open");
    let singleuserimage = document.querySelector(".singleuserimage");
    singleuserimage.classList.remove("open");
    let studenttable = document.querySelector(".studenttable");
    studenttable.classList.remove("open");
    let usertable = document.querySelector(".usertable");
    usertable.classList.remove("open");
    let classtable = document.querySelector(".classtable");
    classtable.classList.remove("open");
  };
  const ImageEdit = () => {
    let singleuserimage = document.querySelector(".singleuserimage");
    console.log(singleuserimage)
    singleuserimage.classList.toggle("open");
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.remove("open");
    let usertable = document.querySelector(".usertable");
    usertable.classList.remove("open");
    let classtable = document.querySelector(".classtable");
    classtable.classList.remove("open");
  };
  const HandleStudent = () => {
    let studenttable = document.querySelector(".studenttable");
    studenttable.classList.toggle("open");
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.remove("open");
    let usertable = document.querySelector(".usertable");
    usertable.classList.remove("open");
    let classtable = document.querySelector(".classtable");
    classtable.classList.remove("open");
  };
  const HandleUser = () => {
    let usertable = document.querySelector(".usertable");
    usertable.classList.toggle("open");
    let studenttable = document.querySelector(".studenttable");
    studenttable.classList.remove("open");
    let classtable = document.querySelector(".classtable");
    classtable.classList.remove("open");
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.remove("open");
  };
  const HandleClass = () => {
    let classtable = document.querySelector(".classtable");
    classtable.classList.toggle("open");
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.remove("open");
    let studenttable = document.querySelector(".studenttable");
    studenttable.classList.remove("open");
    let usertable = document.querySelector(".usertable");
    usertable.classList.remove("open");
  };

  return (
    <div className="row">
      <div className="col-3">
        <div className="user">
          <TiThMenu className="iconMenu" onClick={Handle} />

          <Link to={`/ChangeProfile/${user._id}`} className="bg">
            <img
              onClick={ImageEdit}
              className="image"
              src={`http://localhost:3000/images/` + user.Avator}
              alt=""
            />
          </Link>
          <Link
            to="/UserDashboard "
            className="bg-white text-danger "
            style={{ lineHeight: "45px" }}
          >
            {user && user.UserName}
          </Link>
          <Link
            to="/UserDashboard"
            onClick={SingleDashboard}
            className="active SingeUser text-light fs-5"
          >
            Dashboard
          </Link>
          <Link to="/UserDashboard" onClick={HandleStudent}>
            Student
          </Link>
          <Link to="/UserDashboard" onClick={HandleUser}>
            User
          </Link>
          <Link to="/UserDashboard" onClick={HandleClass}>
            Class
          </Link>
          <Link to={`/ChangeProfile/${user._id}`} className="bsg">
            Settings
          </Link>
        </div>
      </div>
      <div className="col singleuser">
        <SingleDash />
      </div>
      <div className="col singleuserimage">
        receipt
      </div>
      <div className="col classtable">
        <ClassTable />
      </div>
      <div className="col studenttable">
        <StudentTable />
      </div>
      <div className="col usertable">
        <UserTable />
      </div>
    </div>
  );
};
