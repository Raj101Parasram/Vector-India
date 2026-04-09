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
                res.json({"name":obj.name, "_id":obj._id})
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



module.exports={reg, login}