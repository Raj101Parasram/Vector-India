let mongoose= require("mongoose")

let mdschma= new mongoose.Schema({
    "_id":String,
    "name":String,
    "age":Number,
    "phone":String
})

let md= mongoose.model("testmd",mdschma)

module.exports= md