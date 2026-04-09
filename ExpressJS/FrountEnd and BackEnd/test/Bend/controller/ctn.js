let bcrypt= require("bcrypt")
const md = require("../modul/md")

let reg=async(req,res)=>{ 
    try{
        let obj= await md.findById(req.body._id)
        if(obj){
            res.json({"msg":"ID is Exist"})
        }
        else{
            let data= new md({...req.body})
            await data.save()
            res.json({"msg":"Registration Done"})
        }
    }
    catch{
        res.json({"msg":"Error in Registration"})
    }
}

module.exports= reg