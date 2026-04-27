import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import Ct from "./Ct"
import { useNavigate } from "react-router-dom"

let Login=()=>{
    let [data,setData]=useState({"_id":"", "pwd":""})
    let [msg,setMsg]=useState("")
    let obj= useContext(Ct)
    let navigate= useNavigate()

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let login=()=>{
        axios.post("http://localhost:5000/login", data).then((res)=>{
            if(res.data.msg==undefined)
            {
                obj.updstate(res.data)
                if(res.data.role=="manager"){
                    navigate("/manager")
                }
                else{
                    navigate("/employee")
                }
            }
            else{
                setMsg(res.data.msg)
            }
        })
    }


    return(
        <div className="mainlogin">
            <div className="loginform">
                <h2 style={{"color": "red"}}>{msg}</h2>
                <input type="text" placeholder="Enter Employee Id" name="_id" value={data._id} onChange={fun}/>
                <input type="password" placeholder="Enter Password" name="pwd" value={data.pwd} onChange={fun}/>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login