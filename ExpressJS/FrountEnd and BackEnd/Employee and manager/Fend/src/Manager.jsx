import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import Ct from "./Ct"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

let Manager=()=>{
    let [data,setData]=useState([])
    let [msg, setMsg]=useState("")
    let [f, setF]= useState(true)
    let obj= useContext(Ct)
    let navigate= useNavigate()

    useEffect(()=>{
        if(obj.state._id=="")
        {
            navigate("/")
        }
    },[])

    useEffect(()=>{
        axios.get("http://localhost:5000/manager").then((res)=>{
            setData(res.data)
        })
    },[f])

    let del=(id)=>{
        axios.delete(`http://localhost:5000/del/${id}`).then((res)=>{
            setF(!f)
        })
    }

    return(
        <div managerdiv>
            <table border={1}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
                
              <tbody>
                {data.map((objj, ind) => (
                  <tr key={objj._id}>
                    <td>{ind + 1}</td>
                    <td>{objj._id}</td>
                    <td>{objj.name}</td>
                    <td>{objj.task}</td>
                    <td>{objj.status}</td>
                    <td>
                      <button onClick={() => del(objj._id)}>Delete</button>
                    </td>
                    <td>
                      <button><Link to={`/edt/${objj._id}`}>Edit</Link></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

        </div>
    )
}

export default Manager