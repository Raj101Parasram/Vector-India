import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

let Admin=()=>{
    let [data,setData]=useState([])
    let [f,setF]= useState(true)
    useEffect(()=>{
    axios.get("http://localhost:5000/getusers").then((res)=>{
      setData(res.data)
    })
    },[f])
    let del=(id)=>{
      axios.delete(`http://localhost:5000/del/${id}`).then(()=>{
        setF(!f)
      })

    }
    return(<div className="admintab">
      <table border={1}>
        <tr><th>SNO</th> <th>Name</th><th>UID</th><th>Phno</th><th>Gender</th><th>Marks</th></tr>
        {
          data.map((std,ind)=>{
            return(<tr>
              <td>{ind+1}</td>
              <td>{std.name}</td>
              <td>{std._id}</td>
              <td>{std.phno}</td>
              <td>{std.gen}</td>
              <td>{std.marks==undefined?"pending...":std.marks}</td>
              <td><button><Link to={`/upd/${std._id}`}>Edit</Link></button></td>
              <td><button onClick={()=>del(std._id)}>Delete</button></td>
            </tr>)
          })
        }
      </table>
    </div>
  )
}
export default Admin