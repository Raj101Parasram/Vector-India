let express= require("express")
let bcrypt= require("bcrypt")
const med= require("../model/md")

let reg=async(req,res)=>{
    try{
        let obj= await med.findById(req.body._id)
        if(obj){
            res.json({"msg":"This Employe Details is exist"})
        }
        else{
            let hash= await bcrypt.hash(req.body.pwd,10)
            let data= new med({...req.body, "pwd":hash})
            await data.save()
            res.json({"msg":"Employee details is create"})
        }
    }
    catch{
        res.json({"msg":"Error in saving employee details"})
    }
}

let login= async(req,res)=>{
    try{
        let obj= await med.findById(req.body._id)
        if(obj){
            let data= await bcrypt.compare(req.body.pwd,obj.pwd)
            if(data){
                res.json({"name":obj.name, "_id":obj._id, "role":obj.role})
            }
            else{
                res.json({"msg":"Password is Wrong"})
            }
        }
        else{
            res.json({"msg":"Id is Wrong"})
        }
    }
    catch{
        res.json({"msg":"Error in login"})
    }
}


let emp= async(req,res)=>{
    try
    {
        let data= await med.findById(req.params.empid)
        res.json(data)  
    }
    catch
    {
        res.json({"msg":"error in employee searching"})
    }
}

let manager= async(req,res)=>{
    try
    {
        let data=await med.find({"role":"employee"})
        res.json(data)
    }
    catch
    {
        res.json({"msg":"Error in manager page"})
    }
}

let del= async(req,res)=>{
    try
    {
        await med.findByIdAndDelete(req.params.id)
        res.json({"msg":"Deleted"})
    }
    catch
    {
        res.json({"msg":"error in delete"})
    }
}

let edt = async (req, res) => {
    try {
        await med.findByIdAndUpdate(req.body._id, {
            ...req.body,
            status: "pending"   // 🔥 reset status
        })
        res.json("Edit completed")
    }
    catch {
        res.json("Error in edit")
    }
}


let status = async (req, res) => {
    try {
        await med.findByIdAndUpdate(req.params.id, {
            status: "completed"
        })
        res.json({ msg: "Status Updated" })
    }
    catch {
        res.json({ msg: "Error updating status" })
    }
}


module.exports={reg, login, emp, manager, del, edt, status}