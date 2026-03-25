import { useState } from "react"
import Target from "./target"
import Targ from "./target"
// const { useState } = require("react")

const App=()=>{
  let [f,SetF]=useState(false)
  let fun=()=>{
      SetF(!f)
  }
  return(<div>
    {f && <div>
      <h1>hello to all</h1>
      <p>info</p>
      <p>text datalist</p>
      <Target/>
      </div>  
    }
    <button onClick={fun}>{f? "hide":"show"}</button>
  </div>)
}
export default App