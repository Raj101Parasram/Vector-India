import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

let App=()=>{
  let [data,setPdata]=useState([])
  useEffect(()=>{
    axios.get("https://fake-store-api.mock.beeceptor.com/api/products").then((res)=>{
      setPdata(res.data)
    }).catch(()=>{
      console.log("error api is not working")
    })
  },[])
  return(
    <div>
      {
        data.length>0 && <div className="cart">
      {
        data.map((obj)=>{
          return(
            <div>
              <h1>{obj.product_id}</h1>
              <img src={obj.image} alt="" />
              <h3>{obj.name}</h3>
              <p>{obj.category}</p>
              <h2>{obj.price}</h2>
              <h3>Rating : {obj.rating}</h3>
            </div>
          )
        })
      }
      </div>
      }
    </div>
  )
}
export default App