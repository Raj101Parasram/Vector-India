let mongoose=require("mongoose")

let datascma= new mongoose.Schema({
    "_id":String,
    "pwd":String,
    "name":String,
    "task":String,
    "status":String,
    "role":{
        type:String,
        default:"employee"
    }
})


let med= mongoose.model("empdata",datascma)

module.exports= med