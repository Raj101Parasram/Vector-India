let express= require("express")
const reg = require("../controller/ctn")

let rt= new express.Router()
rt.post("/",reg)

module.exports=rt