import { useState } from "react"

let App=()=>{

  let [arr, setArr]=useState([])
  let  [task,setTask]=useState("")
  let [ind,setInd]=useState(-1)

  let inpfun=(e)=>{
    setTask(e.target.value)
  }
  let add=()=>{
    setArr([...arr, task])
    setTask("")
  }
  let edit=(i)=>{
    setTask(arr[i])
    setInd(i)
  }
  let upd=()=>{
    arr[ind]=task
    setArr([...arr])
    setTask("")
    setInd(-1)

    // arr.splice(ind,1)
    // arr.unshift(task)
    // setArr([...arr])
    // setTask("")
    // setInd(-1)
  }
  let del=(i)=>{
    arr.splice(i,1)
    setArr([...arr])
  }


  return(
    <div>
      <input type="text" onChange={inpfun} placeholder="Enter text data" value={task} />
      { ind==-1?
      <button onClick={add}>Add</button> :
      <button onClick={upd}>Update</button>
      } 
      <ul>
        {
          arr.map((str,i)=>
            <li key={i}>{str} <button onClick={()=>edit(i)}>Edit</button> <button onClick={()=>del(i)}>Delete</button></li>
          )
        }
      </ul>
    </div>
  )
}
export default App