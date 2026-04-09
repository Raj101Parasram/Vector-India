let mongoose=require("mongoose")

let modsme=new mongoose.Schema({
  "_id": String,        // ISBN number
  "title": String,
  "author": String,
  "pin": String,        // hashed with bcrypt (like pwd)
  "pages": Number,
  "genre": String,
  "status": {
    type: String,
    default: "available"  // like role default "user"
  }
})

let md= mongoose.model("rm",modsme)

module.exports= md