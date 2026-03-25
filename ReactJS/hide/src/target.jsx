import { useState } from "react";

let Target=()=>{
    let [data,SetData]=useState("")
    let fun=(event)=>{
        SetData(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={fun}/>
            <div>{data}</div>
        </div>
    )
}
export default Target