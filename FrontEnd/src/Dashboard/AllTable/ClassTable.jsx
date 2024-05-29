import moment from 'moment'

export const ClassTable=()=>{
   let Class=JSON.parse(localStorage.getItem("Class")) && JSON.parse(localStorage.getItem("Class"))
    return(
        <div className="block" style={{ padding: "0 15%", marginLeft: "32px" }}>
    
    <table className=" table text-center  " style={{marginTop:"30%"}}>
        <thead>
          <tr>
            <th>Class</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Class && (
            <tr className="text-center">
              <td>{Class.ClassName}</td>
              <td>{Class.ClassStatus}</td>
              <td>{Class.ClassDate &&  moment(Class.ClassDate).format("l")
              
              }</td>
            </tr>
          )}
        </tbody>
      </table>

        </div>
    )
}