import { BrowserRouter } from "react-router-dom"
import Nav from "./nav"
import Home from "./home"
import Test3 from "./test3"
import Test2 from "./test2"
import Test1 from "./test1"

let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test1" element={<Test1/>} />
        <Route path="/test2" element={<Test2/>} />
        <Route path="/test3" element={<Test3/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App