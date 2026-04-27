import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

let User=()=>{
    let [uid,setUid]=useState("")
    let [data,setData]=useState({})
    let [msg,setMsg]=useState("")
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
      if(obj.state._id=="")
      {
        navigate("/")
      }
    
    },[])

    let search=()=>{
      axios.get(`http://localhost:5000/getuser/${uid}`).then((res)=>{
        if(res.data)
        {
          setData(res.data)
          setMsg("")
          setUid("")
        
        }
        else{
          setMsg("check email")
          setData({})
        }
    
      })
    }
    return(
    <div className='userdiv'>
      {msg!=""&&<h2 style={{"color":"red"}}>{msg}</h2>}
      <input type='text' placeholder='Enter email' onChange={(e)=>setUid(e.target.value)} value={uid}/>
      <button onClick={search}>Search</button>
    {
      data._id!=undefined&&
      <table border={1}>
        <tbody>
        <tr>
          <th>UID</th><td>{data._id}</td>
        </tr>
        <tr><th>Name</th><td>{data.name}</td></tr>
         <tr><th>Phno</th><td>{data.phno}</td></tr>
          <tr><th>Gender</th><td>{data.gen}</td></tr>
           <tr><th>Marks</th><td>{data.marks!=undefined?data.marks:"pending..."}</td></tr>
        </tbody>
        
      </table>
    }

    </div>
  )
}
export default User