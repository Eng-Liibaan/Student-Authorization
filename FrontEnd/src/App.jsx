import { Routes, Route } from "react-router-dom";
import {About} from "./pages/About";
import {Contuct} from "./pages/Contuct";
import {Home} from "./pages/Home";

import { User } from "./Components/AllUser/User";
import { UserCreate } from "./Components/AllUser/UserCreate";
import { UserUpdate } from "./Components/AllUser/UserUpdate";
import { UserDelete } from "./Components/AllUser/UserDelete";

import { Receipt } from "./Components/AllReceipt/Receipt";
import { ReceiptCreate } from "./Components/AllReceipt/ReceiptCreate";
import { ReceiptUpdate } from "./Components/AllReceipt/ReceiptUpdate";
import { ReceiptDelete } from "./Components/AllReceipt/ReceiptDelete";

import { Class } from "./Components/AllClass/Class";
import { ClassCreate } from "./Components/AllClass/ClassCreate";
import { ClassUpdate } from "./Components/AllClass/ClassUpdate";
import { ClassDelete } from "./Components/AllClass/ClassDelete";



import { Student } from "./Components/AllStudent/Student";
import { StudentCreate } from "./Components/AllStudent/StudentCreate";
import { StudentUpdate } from "./Components/AllStudent/StudentUpdate";
import { StudentDelete } from "./Components/AllStudent/StudentDelete";
import { UserDashboard } from "./Dashboard/UserDashboard";
import { AdminDashboard } from "./Dashboard/AdminDashboard";
import { ChangeProfile } from "./Dashboard/ChangeProfile";
import Login, { Change, SingUp } from "./pages/Login";
import { Services } from "./pages/Services";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/User" element={<User />} />
        <Route path="/UserCreate" element={<UserCreate />} />
        <Route path="/UserUpdate/:id" element={<UserUpdate />} />
        <Route path="/UserDelete/:id" element={<UserDelete />} />

        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/ReceiptCreate" element={<ReceiptCreate />} />
        <Route path="/ReceiptUpdate/:id" element={<ReceiptUpdate />} />
        <Route path="/ReceiptDelete/:id" element={<ReceiptDelete />} />

        <Route path="/Class" element={<Class />} />
        <Route path="/ClassCreate" element={<ClassCreate />} />
        <Route path="/ClassUpdate/:id" element={<ClassUpdate />} />
        <Route path="/ClassDelete/:id" element={<ClassDelete />} />

        <Route path="/Student" element={<Student />} />
        <Route path="/StudentCreate" element={<StudentCreate />} />
        <Route path="/StudentUpdate/:id" element={<StudentUpdate />} />
        <Route path="/StudentDelete/:id" element={<StudentDelete />} />

        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "16%" }}>
              Not Found Page
            </h1>
          }
        />

        <Route
          path="/UserDashboard"
          element={<UserDashboard  />}
        />

        <Route path="/ChangeProfile/:id" element={<ChangeProfile />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/change" element={<Change />} />

        {/* <Route path="/Profile/:id" element={<UpdateUserProfile />} />
                
                <Route path="/UserDelete/:id" element={<UserDelete />} />
                <Route path="/Class" element={<Class />} />
                <Route path="/ClassUpdate/:id" element={<ClassUpdate />} />
                <Route path="/ClassCreate" element={<ClassCreate />} />
                <Route path="/ClassDelete/:id" element={<ClassDelete />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/StudentUpdate/:id" element={<StudentUpdate />} />
                <Route path="/StudentCreate" element={<StudentCreate />} />
                <Route path="/StudentDelete/:id" element={<StudentDelete />} />
                <Route path="/Receipt" element={<Receipt />} />
                <Route path="/ReceiptUpdate/:id" element={<ReceiptUpdate />} />
                <Route path="/ReceiptCreate" element={<ReceiptCreate />} />
                <Route path="/ReceiptDelete/:id" element={<ReceiptDelete />} />
 */}

        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contuct" element={<Contuct />} />
      </Routes>
    </div>
  );
};

export default App;
