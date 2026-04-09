import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Login from "./Login"
import Reg from "./Reg"
import User from "./User"
import Admin from "./Admin"
import Logout from "./Logout"
import Ct from "./Ct"
import './App.css'
import Upd from "./Ubd"

let App=()=>{
  let [state,setSate]=useState({"name":"","role":"","_id":""})
  let updstate=(obj)=>{
    setSate({...state,...obj})
  }
  let obj={"state":state,"updstate":updstate}
  return(
    <Ct.Provider value={obj}>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/upd/:id" element={<Upd/>} />
      </Routes>
    </Ct.Provider>
  )
}
export default App