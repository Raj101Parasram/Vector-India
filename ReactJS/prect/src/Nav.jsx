import { Link } from "react-router-dom"

let Nav=()=>{
    return(
        <nav className="headnav">
            <Link to="/home" >Home</Link>
            <Link to="/formm" >Formm</Link>
            <Link to="/api" >Api</Link>
            <Link to="/clock" >Clock</Link>
            <Link to="/test1" >Test1</Link>
        </nav>
    )
}
export default Nav