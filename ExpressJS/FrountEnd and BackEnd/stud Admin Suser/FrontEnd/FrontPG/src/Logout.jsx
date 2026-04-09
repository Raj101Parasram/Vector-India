import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

let Logout=()=>{
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
    obj.updstate({"name":"","role":"","_id":""})
    navigate("/")
    },[])
    return(
        <div>
            Logout
        </div>
    )
}
export default Logout