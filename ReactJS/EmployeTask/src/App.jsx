import { useState } from "react"

let App=()=>{
  let [data,setData]=useState({"eid":"","title":"","desc":"","dl":"","status":"pending"})
  let [arr,setArr]=useState([])
  let [i,setI]=useState(-1)
  let fun=(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }
  let add=()=>{
    setArr([...arr,data])
    setData({"eid":"","title":"","desc":"","dl":"","status":"pending"})
  }
  let upd=()=>{
    arr[i]=data
    setArr([...arr])
    setData({"eid":"","title":"","desc":"","dl":"","status":"pending"})
    setI(-1)
  }
  let mc=(i)=>{
    arr[i].status="Completed"
    setArr([...arr])
  }
  let del=(i)=>{
    arr.splice(i,1)
    setArr([...arr])
    setData({"eid":"","title":"","desc":"","dl":"","status":"pending"})
    setI(-1)

  }
  let edit=(obj,i)=>{
    setData(obj)
    setI(i)
  }
  return(
    <div>
      <div className="form">
          <select name="eid" value={data.eid} onChange={fun}>
            <option value=""disabled>---Select---</option>
            <option value="E101">e101--Naveen</option>
            <option value="E102">e102--Naresh</option>
            <option value="E103">e103--Kusuma</option>
            <option value="E104">e104--Kamala</option>
          </select>
          <input type="text" placeholder="Enter Title" name="title" value={data.title} onChange={fun} />
          <textarea name="desc" placeholder="Enter description" value={data.desc} onChange={fun} id=""></textarea>
          <input type="date" name="dl" value={data.dl} onChange={fun} />
          {i==-1?<button onClick={add}>Add Task</button>:<button onClick={upd}>Update</button>}
      </div>
      {
        arr.length>0 && <table border={1}>
          <tr><th>SNO</th><th>Eid</th><th> Title</th><th>Desc</th><th>End date</th><th>Status</th></tr>
        {
          arr.map((obj,i)=>{
            return(
              <tr>
                <td>{i+1}</td>
                <td>{obj.eid}</td>
                <td>{obj.title}</td>
                <td>{obj.desc}</td>
                <td>{obj.dl}</td>
                <td>{obj.status}</td>
              { obj.status=="pending"&&
              <> 
                <td><button onClick={()=>edit(obj,i)}>edit</button></td>
                <td><button onClick={()=>del(i)}>Delete</button></td>
                <td><button onClick={()=>mc(i)}>Completed</button></td>
              </>
              }
              </tr>
            )
          })
        }
        </table>
      }
  </div>
  )
}
export default App