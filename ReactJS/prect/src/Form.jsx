import { useState } from "react"

let Fromm=()=>{
    let [arr,setArr]=useState({})
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")
    let funN=(e)=>{
        setName(e.target.value)
    }
    let funA=(e)=>{
        setAge(e.target.value)
    }
    let funE=(e)=>{
        setEmail(e.target.value)
    }
    let funP=(e)=>{
        setPhone(e.target.value)
    }
    let fun=()=>{
        setArr({name,age,email,phone})
        setAge("")
        setEmail("")
        setName("")
        setPhone("")
    }
    return(
        <div className="formmdiv">
            <form action="" className="inpform">
                <input type="text" onChange={funN} value={name} placeholder="Enter Name"/>
                <input type="date" onChange={funA} value={age} />
                <input type="text" onChange={funE} value={email} placeholder="Enter Email ID"/>
                <input type="number" onChange={funP} value={phone} placeholder="Enter Phone Number"/>
                <button type="button" onClick={fun}>Show</button>
            </form>
            {arr.name && arr.email && arr.phone &&
                <div className="dataform">
                    <h2>Name : {arr.name}</h2>
                    <h3>Age : {arr.age}</h3>
                    <h3>Email : {arr.email}</h3>
                    <h3>Phone Number : {arr.phone}</h3>
                </div>
            }
        </div>
    )
}
export default Fromm