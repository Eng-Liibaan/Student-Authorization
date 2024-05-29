export const UserTable=()=>{
    let ApiData=JSON.parse(localStorage.getItem("ApiData")) && JSON.parse(localStorage.getItem("ApiData"))
    return(
        <div className="block" style={{ padding: "0 15%", marginLeft: "32px" }}>
    
      <table className=" table text-center  " style={{marginTop:"30%"}}>
        <thead>
          <tr>
          <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {ApiData && (
            <tr className="text-center">
              <td>{ApiData.Email}</td>
              <td>{ApiData.Role}</td>
              <td>{ApiData.Status}</td>
            </tr>
          )}
        </tbody>
      </table>
        </div>
    )
}