import { Link } from "react-router-dom";

export const User = () => {


  return (
    <div className="container" style={{ marginTop: "10px", padding: "0 4%" }}>
      <Link to={`/UserCreate`} className="btn btn-info mx-2">
        Create +
      </Link>
      <table className="table  text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>E-mail</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {UserApi &&
            UserApi.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.UserName}</td>
                <td>{data.Email}</td>
                <td>{data.Role}</td>
                <td>{data.Status}</td>
                <td>{moment(data.Date).format("LL")}</td>
                <td>
                  {
                    <div>
                      <Link
                        to={`/UserUpdate/${data._id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      |
                      <Link
                        to={`/UserDelete/${data._id}`}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </Link>
                    </div>
                  }
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};
