let mongoose=require('mongoose')
let rssch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "phno":String,
    "marks":Number,
    "gen":String,
    "role":{
        type:String,
        default:"user"

    }
})

let rm=mongoose.model("rm",rssch)
module.exports=rm