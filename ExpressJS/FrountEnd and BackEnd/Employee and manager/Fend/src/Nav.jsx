import { useContext } from "react"
import Ct from "./Ct"
import { Link } from "react-router-dom"

let Nav=()=>{
    let obj=useContext(Ct)
    return(
        <div className="nav">
            {obj.state._id==""?<>
            <Link to={"/login"}>Login</Link>
            <Link to={"/"}>Register</Link></>:<>
            {obj.state.role=="employee"?<Link to={"/employee"}>Task</Link>:<Link to={"/manager"}>Manager</Link>}
            <Link>Logout</Link>
            <h2>{obj.state.name}</h2>
            </>}
        </div>
    )
}

export default Nav