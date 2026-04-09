import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from "./Addbook"
import IssueBook from "./Issuebook"
import Navbar from "./Navbar"
import './App.css'


let App=()=>{
  return(
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/issuebook" element={<IssueBook />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App