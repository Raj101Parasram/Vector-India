import axios from "axios"
import React, { useState } from "react"

let Reg=()=>{
    let [data,setData]= useState({"_id":"", "name":"", "pwd":""})
    let [msg,setMsg]= useState("")

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("https://localhost:5000/reg", data).then((res)=>{
            setMsg(res.data.msg)
            if(res.data.msg=="Employee details is create"){
                setData({"_id":"", "name":"", "pwd":""})
            }
        })
    }
    return(
        <div className="mainreg">
            <div className="regform">
                <h2 style={{"color":"red"}}>{msg}</h2>
                <input type="text" placeholder="Enter Employee ID" name="_id" value={data._id} on onChange={fun} />
                <input type="text" placeholder="Enter Employee Name" name="name" value={data.name} on onChange={fun} />
                <input type="password" placeholder="Enter Employee Password" name="pwd" value={data.pwd} on onChange={fun} />
                <button onClick={add}>Register</button>
            </div>
        </div>
    )
}

export default Reg