import { useState } from "react"

// let App=()=>{
//   let [c,setc]=useState(0)
//   let inc=()=>{
//     setc(c+1)
//   }
//   let dec=()=>{
//     if(c>0){
//     setc(c-1)
//     }
//   }
//   let reset=()=>{
//     setc(0)
//   }
//   return(<div>
//     <h1>{c}</h1>
//     <button onClick={inc}>+</button>
//     <button onClick={dec}>-</button>
//     <button onClick={reset}>Reset</button>
//   </div>)
// }

// const App=()=>{
//   let [f, setf]=useState(false)
//   let fun=()=>{
//     setf(!f)
//   }
//   return(<div className="maindiv">
//     {f&&<div>
//       <h1>hello to all</h1>
//       <p>this is toogel function</p>
//       <p>info</p>
//     </div>}
//     <button onClick={fun}>{f?"Hide":"Show"}</button>
//   </div>)
// }
// export default App


let App=()=>{
  let [n,setn]=useState(5)
  let [n1,setn1]=useState(6)
  let [a,seta]=useState(0)
  let add=()=>{
    seta(n+n1)
  }
  let sub=()=>{
    seta(n-n1)
  }
  let mul=()=>{
    seta(n*n1)
  }
  let deiv=()=>{
    seta(n/n1)
  }
  return(<div>
    <h1>{a}</h1>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={mul}>*</button>
    <button onClick={deiv}>/</button>
  </div>)
}
export default App