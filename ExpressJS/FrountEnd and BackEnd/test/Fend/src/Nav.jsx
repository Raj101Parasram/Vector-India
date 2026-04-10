import { useContext } from "react"
import Ct from "./Ct"
import { Link } from "react-router-dom"



let Nav=()=>{
    let obj=useContext(Ct)
    return(
        <div className="navbar">
            <Link to={"/"}>Display Products</Link>
            <Link to={"/add"}>Add Products</Link>
        </div>
    )
}

export default Nav