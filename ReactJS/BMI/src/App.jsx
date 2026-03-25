import { useState } from "react"
import "./App.css"

let App=()=>{
  let [w, setW]=useState("")
  let [h,setH]=useState("")
  let [r,setR]=useState("")
  let updht=(e)=>{
    setH(e.target.value)
  }
  let updwt=(e)=>{
    setW(e.target.value)
  }
  let cal=()=>{
    setR((w/(h**2))*10000)
    setH("")
    setW("")
  }
  return(
    <div>
      <input type="text" placeholder="enter height" onChange={updht} value={h} />
      <input type="text" placeholder="enter height" onChange={updwt} value={w} />
      <button onClick={cal}>cal</button>
      <div>{r}</div>
    </div>
  )
}
export default App