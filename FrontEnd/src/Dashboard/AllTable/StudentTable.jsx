export const StudentTable=()=>{
   let Student=JSON.parse(localStorage.getItem("Student")) && JSON.parse(localStorage.getItem("Student"))
    
    return(
        <div className="block" style={{ padding: "0 15%", marginLeft: "32px" }}>
    
    <table className=" table text-center  " style={{marginTop:"30%"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Student && (
            <tr className="text-center">
              <td>{Student.Name}</td>
              <td>{Student.Balance}</td>
              <td>{Student.Status}</td>
            </tr>
          )}
        </tbody>
      </table>
        </div>
    )
}