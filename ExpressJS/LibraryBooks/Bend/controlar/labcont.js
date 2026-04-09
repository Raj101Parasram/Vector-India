    let bcrypt=require("bcrypt")
    let md= require("../modul/md")

    let addbook= async(req,res)=>{
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
                res.json({"msg":"Book Added Successfully"})   
            }
            
        }
        catch
        {
            res.json({"msg":"error in adding book"})
        }
    }

    let issuebook = async(req, res) => {
    try
    {
        let obj = await md.findById(req.body._id)
        if(obj)
        {
            let f = await bcrypt.compare(req.body.pin, obj.pin)
            if(f)
            {
                res.json({"title": obj.title, "author": obj.author, "status": obj.status, "_id": obj._id})
            }
            else
            {
                res.json({"msg":"Wrong Pin"})
            }
        }
        else
        {
            res.json({"msg":"Book Not Found"})
        }
    }
    catch
    {
        res.json({"msg":"Error in Issuing Book"})
    }
}

module.exports= {issuebook, addbook}