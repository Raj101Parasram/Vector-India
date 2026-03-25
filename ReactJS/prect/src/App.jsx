import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Clock from "./Clock"
import Api from "./Api"
import Fromm from "./Form"
import Test1 from "./Test1"
import "./App.css"

let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/formm" element={<Fromm/>}/>
      <Route path="/api" element={<Api/>}/>
      <Route path="/clock" element={<Clock/>}/>
      <Route path="/test1" element={<Test1/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App