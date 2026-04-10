import Display from "./display"
import Nav from "./Nav"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from "./Products"


let App=()=>{
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Display/>} />
        <Route path="/add" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App