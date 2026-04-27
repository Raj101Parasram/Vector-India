import { useContext, useEffect, useState } from "react"
import Ct from "./Ct"
import { useNavigate } from "react-router-dom"
import axios from "axios"

let Employee=()=>{
    let [data,setData]= useState({})
    let [empid,setEmpid]= useState("")
    let [msg,setMsg]= useState("")

    let obj= useContext(Ct)
    let navigate=useNavigate()

    useEffect(()=>{
        if(obj.state._id=="")
        {
            navigate("/")
        }
    },[obj.state])

    let search=()=>{
        axios.get(`http://localhost:5000/emp/${empid}`).then((res)=>{
            if(res.data)
            {
                setData(res.data)
                setMsg("")
                setEmpid("")
            }
            else{
                setMsg("Check Email")
                setData({})
            }
        })
    }

    let completeTask = () => {
        axios.put(`http://localhost:5000/status/${data._id}`)
        .then(() => {
            setData({ ...data, status: "completed" })
        })  
        .catch(() => {
            alert("Error updating status")
        })
    }

    return(
        <div className="empPG">
            <div className="empinput">
                <input type="text" placeholder="Enter Your Employee ID" onChange={(e)=>setEmpid(e.target.value)} value={empid} />
                <button onClick={search}>Search</button>
            </div>
            {
                data._id!=undefined&&
                <table border={1}>
                  <thead>
                    <tr>
                      <th>Emp ID</th>
                      <th>EMP Name</th>
                      <th>Task</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{data._id}</td>
                      <td>{data.name}</td>
                      <td>{data.task ? data.task : "Task not issued"}</td>
                      <td style={{ color: data.status === "completed" ? "green" : "red" }}>
                          {data.status || "Pending"}
                      </td>
                    </tr>
                  </tbody>
                </table>
            }
            
            {data._id && (
                <button onClick={completeTask} disabled={data.status === "completed"}>
                        {data.status === "completed" ? "Completed" : "Mark as Completed"}
                </button>
            )}
        </div>
    )
}

export default Employee