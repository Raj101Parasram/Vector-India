let mongoose= require("mongoose")

let mdschma= new mongoose.Schema({
    "_id":String,
    "pname":String,
    "price":Number,
    "category":String,
    "type":{
        type:String,
        default:"products"
    }
})

let md= mongoose.model("testmd",mdschma)

module.exports= md