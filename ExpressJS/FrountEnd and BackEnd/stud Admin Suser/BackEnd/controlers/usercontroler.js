let bcrypt=require("bcrypt")
const rm = require("../models/stdamd")
let reg=async(req,res)=>{
    try
    {
        let obj=await rm.findById(req.body._id)
        if(obj)
        {
            res.json({"msg":"email exists"})
        }
        else
        {
            let hash=await bcrypt.hash(req.body.pwd,10)
            let data=new rm({...req.body,"pwd":hash})
            await data.save()
            res.json({"msg":"reg done"})

        }

    }
    catch
    {
        res.json({"msg":"error in reg"})
    }
}
let login=async(req,res)=>{
    try
    {
      let obj=await rm.findById(req.body._id)
      if(obj) 
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
            {
                res.json({"name":obj.name,"role":obj.role,"_id":obj._id})
            }
            else
            {
                res.json({"msg":"check pwd"})
            }

        } 
        else
        {
            res.json({"msg":"check email"})
        }

    }
    catch
    {
        res.json({"msg":"error in login"})
    }
}

module.exports={login,reg}