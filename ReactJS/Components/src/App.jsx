// import Btn from "./Btn"
// import Btn1 from "./Btn1"
// import Cart from "./Cart"
// import Footer from "./Footer"

// let App=()=>{
//   let obj={color:"red", backgroundColor:"yellow"}
//   return(<div>
//     <Cart />
//     <Btn sty={obj}/>
//     <Footer/>

//     <Btn1 cname="c1" label="Add to cart" sty={obj}/>
//   </div>)
// }
// export default App

import Btn1 from "./Btn1"
import Cart from "./Cart"
import Footer from "./Footer"
import Header from "./Header"

let All=()=>{
  let obj={color: "red", backgroundColor:"orange"}
    return(
        <div>
            <Header/>
            <Cart/>
            <Btn1 cname="b1" sty={obj} label="Add To Cart"/>
            <Footer/>
        </div>
    )
}
export default All