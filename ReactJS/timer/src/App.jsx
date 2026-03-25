import { useEffect, useState } from "react"
import "./App.css"

let App=()=>{
  let [dt,setDt]=useState(new Date)
  let update=()=>{
    setDt(new Date())
  }
  useEffect(()=>{
    let idd=setInterval(update,1000)
    return()=>{
      clearInterval(idd)
    }
  },[])
  return(
    <div className="main">
      <h1>
      {
        dt.toLocaleTimeString()
      }
      </h1>
    </div>
  )
}
export default App