import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

let Upd=()=>{
    let [data,setData]= useState({"_id":"","name":"", "task":""})
    let {id}=useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/emp/${id}`).then((res)=>{
            setData(res.data)
        })
    },[id])

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let edt=()=>{
        axios.put(`http://localhost:5000/edt`, data).then(()=>{
            navigate("/manager")
        })
    }

    return(
        <div className="mainreg">
            <div className="regform">
                <input type="text" placeholder="Enter Employee ID" name="_id" value={data._id} on onChange={fun} />
                <input type="text" placeholder="Enter Employee Name" name="name" value={data.name} on onChange={fun} />
                <input type="text" placeholder="Enter Employee Task" name="task" value={data.task} on onChange={fun} />
                <button onClick={edt}>Add Task</button>
            </div>
        </div>
    )
}

export default Upd