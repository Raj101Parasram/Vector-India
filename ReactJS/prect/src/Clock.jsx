import { useEffect } from "react"
import { useState } from "react"

let Clock=()=>{
    let [time,setTime]=useState(new Date())

    useEffect(()=>{
        let idd=setInterval(() => {
            setTime(new Date())
        }, 1000)
        return()=>{
            clearInterval(idd)
        }
    },[])
    return(
        <div className="clockdiv">
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}
export default Clock