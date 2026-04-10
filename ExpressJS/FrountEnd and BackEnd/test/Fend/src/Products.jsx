import { useState } from "react"
import axios from "axios"


let Products=()=>{
    let [pdata,setPdata]= useState({"_id":"", "pname":"", "price":"", "category":""})
    let [msg, setMsg]= useState("")
    
    let fun=(e)=>{
        setPdata({...pdata,[e.target.name]:e.target.value})
    }

    let add=()=>{
        axios.post("http://localhost:5000/add",pdata).then((res)=>{
            setMsg(res.data.msg)
            if (res.data.msg==="product is added")
            {
                setPdata({"_id":"", "pname":"", "price":"", "category":""})
            }
        })
    }

    return(
        <div className="maininput">
            <div className="pinput">
                <input type="text" placeholder="Enter Product ID" name="_id" value={pdata._id} onChange={fun} />
                <input type="text" placeholder="Enter name" name="pname" value={pdata.pname} onChange={fun} />
                <input type="text" placeholder="Enter price" name="price" value={pdata.price} onChange={fun} />
                <input type="text" placeholder="Enter category" name="category" value={pdata.category} onChange={fun} />
                <button onClick={add}>ADD Details</button>
            </div>
        </div>
    )
}

export default Products