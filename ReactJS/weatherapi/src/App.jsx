import axios from "axios"
import { useState } from "react"

let App=()=>{
  let [place,setPlace]=useState("")
  let [wdata,setWdata]=useState({})
  let [msg,setMsg]=useState("")

  let fun=(e)=>{
    setPlace(e.target.value)
  }

  let get=()=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=ac13802f98f74ad38ee130950261003&q=${place}&aqi=yes`).then((res)=>{
      setWdata(res.data)
      setMsg("")
    }).catch((err)=>{
      setMsg("Enter valid placew Name")
      setWdata({})
    })
    setPlace("")
  }
  return(
    <div>
      <input type="text" onChange={fun} value={place}/>
      <button onClick={get}>Get Data</button>
      <h2 style={{"color":"red"}}>{msg}</h2>

      {
        wdata.location!= undefined && 
        <div> 
          <p>Place : {wdata.location.name}</p>
          <p>Regin : {wdata.location.region}</p>
          <p>Condition : {wdata.current.condition.text}</p>
          <p>Wind_degree : {wdata.current.wind_degree}</p>
          <p>Wind_kph: {wdata.current.wind_kph}</p>
          <p>Wind_Direction: {wdata.current.wind_dir}</p>
        </div>
      }
    </div>
  )
}
export default App