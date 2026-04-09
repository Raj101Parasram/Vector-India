import axios from 'axios'
import React, { useState } from 'react'

let Reg=()=>{
    let [data,setData]=useState({"_id":"","name":"","phno":"","pwd":"","gen":""})
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
      axios.post("http://localhost:5000/reg",data).then((res)=>{
        setMsg(res.data.msg)
        if(res.data.msg=="reg done")
        {
          setData({"_id":"","name":"","phno":"","pwd":"","gen":""})
        }
      })
    }
    return(<div className='formcon'>
      <div className='form'>
         <h2 style={{"color":"red"}}>{msg}</h2>
        <input type='text' placeholder='Enter email' name="_id" value={data._id} onChange={fun}/>
        <input type='text' placeholder='Enter name' name="name" value={data.name} onChange={fun}/>
        <input type='password' placeholder='Enter password' name="pwd" onChange={fun} value={data.pwd}/>
        <input type='text' name='phno' placeholder='Enter phno' value={data.phno} onChange={fun}/>
        <p>
          <input type='radio' name='gen' value="male" checked={data.gen=="male"} onChange={fun}/>Male
          <input type='radio' name='gen' value="female" checked={data.gen=="female"} onChange={fun}/>Female
        </p>
        <button onClick={add}>Register</button>

      </div>
    </div>
  )
}
export default Reg