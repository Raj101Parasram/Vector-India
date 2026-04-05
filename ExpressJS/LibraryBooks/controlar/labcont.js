    let bcrypt=require("bcrypt")
    let md= require("../modul/md")

    let ser= async(req,res)=>{
        try
        {

            let obj= await md.findById(req.body._id)
            if (obj){
                res.json({"msg":"Book is alredy Exists"})
            }
            else{
                let abc=await bcrypt.hash(req.body.pin,10)
                let data = new md({...req.body, "pin":abc})
                await data.save()
                
            }
            
        }
        catch
        {
            res.json({"msg":"error in adding book"})
        }
    }