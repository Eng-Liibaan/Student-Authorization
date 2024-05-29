import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { endpoint } from "../../pages/Login";
export const Class = () => {
  let [ClassApi, setClassApi] = useState([]);
  useEffect(() => {
    let SendRequest = async () => {
      let { data: ClassData } = await axios.get(
        endpoint + "/class/Allclass"
      );
      setClassApi(ClassData);
    };
    SendRequest();
  }, []);

  localStorage.setItem("ClassData",JSON.stringify(ClassApi))

  return (
    <div className="container" style={{ marginTop: "10px", padding: "0 4%" }}>
      <Link to={`/ClassCreate`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>ClassName</th>
            <th>E-mail</th>
            <th>ClassStatus</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ClassApi &&
            ClassApi.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.ClassName}</td>
                <td>{data.Email.Email}</td>
                <td>{data.ClassStatus}</td>
                <td>{moment(data.Date).format("l")}</td>

                <td>
                  {
                    <div>
                      <Link
                        to={`/ClassUpdate/${data._id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      |
                      <Link
                        to={`/ClassDelete/${data._id}`}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </Link>
                    </div>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};
