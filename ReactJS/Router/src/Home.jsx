import { useEffect, useState } from "react"
import Acc from "./Acc"

let arr=[{"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EcB1xdU85AVZVMZeMZz2aHHGYVzOtQ8xBw&s`,"hd":"Heading 1", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--1"},
    {"img":`https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw`,"hd":"Heading 2", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--2"},
    {"img":`https://thumbs.dreamstime.com/b/cute-cat-sleeping-street-car-random-58655731.jpg`,"hd":"Heading 3", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--3"},
    {"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYP7khs068Pjdc7QJ2UfwiEHaV2tHiMe2kw&s`,"hd":"Heading 4", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--4"},
    {"img":`https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg`,"hd":"Heading 5", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--5"},
    {"img":`https://africanoverlandtours.com/wp-content/uploads/2025/04/animal_facts-e1396431549968.jpg`,"hd":"Heading 6", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--6"},
    {"img":`https://static.vecteezy.com/system/resources/thumbnails/072/257/155/small/heart-shaped-tree-growing-in-a-green-field-under-a-cloudy-sky-photo.jpg`,"hd":"Heading 7", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--7"},
    {"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hCu_IPF0OV1KJqcqewsC9YSubl6wafAM0A&s`,"hd":"Heading 8", "pg":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia esse magnam rerum fugiat nulla a corporis earum sed voluptatibus, vero odio corrupti eos!--8"}
]

let Home=(props)=>{
    let sty={"width": "100%", "height": "95vh", "position": "relative"}
    let imgsty={"width":"100%", "height":"100%", "opacity": "0.7"}


    let [i,setI]=useState(0)

    let frw=()=>{
        setI(i=>(i+1)%arr.length)
    }
    let bkw=(obj,ind)=>{
        if(i==0){
            setI(arr.length-1)
        }else{
            setI(i=>(i-1))
        }
    }
    useEffect(()=>{
        let idd= setInterval(frw,5000)
        return()=>{
            console.log("bnr unmounted")
            clearInterval(idd)
        }
    },[])

    return(<>
            <div style={sty}>
                <img src={arr[i].img} alt="" style={imgsty} />
                <div className="para">
                    <h1>{arr[i].hd}</h1>
                    <p>{arr[i].pg}</p>
                    <button>Know More..</button>
                </div>
                <button className="btn lt" onClick={bkw}>&lt;</button>
                <button onClick={frw} className="btn rt">&gt;</button>
                <div className="dots">
                    {
                        arr.map((obj,ind)=>{
                            return(
                                <i class={i==ind?"fa-solid fa-circle":"fa-regular fa-circle"} onClick={()=>setI(ind)}></i>
                            )
                        })
                    }
                </div>
            </div>
            <Acc/>
       </>
    )
}
export default Home