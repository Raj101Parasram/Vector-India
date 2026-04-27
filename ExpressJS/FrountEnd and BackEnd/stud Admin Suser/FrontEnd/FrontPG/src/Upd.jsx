import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

let Upd=()=>{
    let [data,setData]=useState({"_id":"","name":"","phno":"","gen":"","marks":""})
    let {id}=useParams()
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:5000/getuser/${id}`).then((res)=>{
            setData(res.data)
        })

    },[id])
   let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
   } 
   let upd=()=>{
    axios.put("http://localhost:5000/upd",data).then(()=>{
        navigate("/admin")

    })

   }
    return(
        <div className='formcon'>
      <div className='form'>
        <input type='text' placeholder='Enter email' name="_id" value={data._id} onChange={fun} readOnly/>
        <input type='text' placeholder='Enter name' name="name" value={data.name} onChange={fun}/>
        <input type='text' name='phno' placeholder='Enter phno' value={data.phno} onChange={fun}/>
        <p>
          <input type='radio' name='gen' value="male" checked={data.gen=="male"} onChange={fun}/>Male
          <input type='radio' name='gen' value="female" checked={data.gen=="female"} onChange={fun}/>Female
        </p>
        <input type='number' name='marks' placeholder='Enter marks' value={data.marks} onChange={fun}/>
        <button onClick={upd}>update</button>

      </div>
    </div>
  )
}

export default Upd