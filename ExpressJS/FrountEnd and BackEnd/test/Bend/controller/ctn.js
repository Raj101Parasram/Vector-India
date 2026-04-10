let bcrypt= require("bcrypt")
const md = require("../modul/md")

let reg=async(req,res)=>{ 
    try{
        let obj= await md.findById(req.body._id)
        if(obj){
            res.json({"msg":"producte is Exists"})
        }
        else{
            let data= new md({...req.body})
            await data.save()
            res.json({"msg":"product is added"})
        }
    }
    catch{
        res.json({"msg":"Error in adding products"})
    }
}

let disp= async (req,res)=>{
    try{
        let data= await md.find()
        res.json(data)
    }
    catch{
        res.json({"msg":"error in display"})
    }
}

module.exports= {reg, disp}