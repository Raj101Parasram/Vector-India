import { useEffect, useState } from "react"
import "./App.css"

let App=()=>{
  let [s,setS]=useState(0)
  let [m,setM]=useState(0)
  let [sm,setSm]=useState(-1)

  let inc=()=>{
    setS(ss=>ss+1)
  }
  let start=()=>{
    if (sm==-1)
    {
      setSm(setInterval(inc,1000))
    }
  }
  let stop=()=>{
    clearInterval(sm)
    setSm(-1)
  }
  let reset=()=>{
    stop()
    setS(0)
    setM(0)
  }
  useEffect(()=>{
    if(s==60)
    {
      setM(m=>m+1)
      setS(0)
    }
  },[s])

  return(
    <div className="main">
      <h1>{m<10? "0"+m:m} : {s<10? "0"+s:s}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default App