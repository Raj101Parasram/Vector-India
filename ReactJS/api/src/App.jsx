import axios from "axios"
import { useEffect, useState } from "react"

let App=()=>{
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
      setData(res.data)
    }).catch(()=>{
      console.log("Error in fetching Data")
    })
  },[])
  return(
    <div>
        <table border={1}>
          <tr><th>SNo</th><th>Name</th><th>Email ID</th><th>Discription</th></tr>
          {
            data.map((obj)=>{
              return(
                <tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.body}</td>
              </tr>
              )
            })
          }
        </table>
    </div>
  )
}
export default App