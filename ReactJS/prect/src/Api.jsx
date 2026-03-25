import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

let Api=()=>{
    let [arr,setArr]=useState([])
    useEffect(()=>{
        axios(`https://dummyjson.com/products`).then(res=>setArr(res.data.products))
    },[])
    return(
        <div className="carts">
            {
                arr.map((obj,ind)=>{
                    return(
                        <div className="childcarts">
                            <h1>{obj.title}</h1>
                            <img src={obj.images} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Api