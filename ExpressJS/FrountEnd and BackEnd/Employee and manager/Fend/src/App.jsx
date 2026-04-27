import { BrowserRouter, Route, Routes } from "react-router-dom"
import Manager from "./Manager"
import Nav from "./Nav"
import Reg from "./Reg"
import Login from "./Login"
import Employee from "./Employee"
import Ct from "./Ct"
import { useState } from "react"
import Logout from "./Logout"
import Upd from "./Upd"
import "./App.css"


let App=()=>{
  let [state,setState]=useState({"_id":"", "name":"", "role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
  let obj={"state":state, "updstate":updstate}
  return(
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path="/" element={<Reg/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/manager" element={<Manager/>} />
      <Route path="/employee" element={<Employee/>} />
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/edt/:id" element={<Upd/>}/>
    </Routes>
    </Ct.Provider>
  )
}


export default App