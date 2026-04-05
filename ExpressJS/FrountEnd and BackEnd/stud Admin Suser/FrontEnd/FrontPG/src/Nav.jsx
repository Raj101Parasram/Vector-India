import { useContext } from "react"
import Ct from "./Ct"
import { Link } from "react-router-dom"

let Nav=()=>{
    let obj=useContext(Ct)
    return(<div className="nav">
        {obj.state._id==""?<>
        <Link to="/">Login</Link>
        <Link to="/reg">Register</Link>
        </>:<>
        {obj.state.role=="user"?<Link to="/user">Result</Link>:<Link to="/admin">AdminDashbord</Link>}
        <Link to="/logout">Logout</Link>
        <h2>{obj.state.name}</h2>
        </>}
    </div>)
}
export default Nav