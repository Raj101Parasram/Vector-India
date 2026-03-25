import { useState } from "react"
import "./Acc.css"

let arr=[{"title":"Heading-1","desc":"Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"},
         {"title":"Heading-2","desc":"Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"},
         {"title":"Heading-3","desc":"Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"},
         {"title":"Heading-4","desc":"Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"},
         {"title":"Heading-5","desc":"Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java"}
]

let Acc=()=>{
    let [i,setI]=useState(-1)
    let fun=(ind)=>{
        if(ind==i){
            setI(-1)
        }else{
            setI(ind)
        }
    }
    return(
        <div>
            {
                arr.map((obj,ind)=>{
                    return(
                        <div className="accmain">
                            <div className="acched">
                                <h1>{obj.title}</h1>                        
                            {/* {ind==i?
                                <i class="fa-solid fa-caret-up" onClick={()=>fun[ind]}></i>:
                                <i class="fa-solid fa-caret-down" onClick={()=>fun[ind]}></i>
                            }    */}
                            <i class={i==ind?"fa-solid fa-caret-up":"fa-solid fa-caret-down"} onClick={()=>fun(ind)} ></i>
                            </div>
                            {ind==i&&<p>{obj.desc}</p>}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Acc