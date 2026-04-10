let express= require("express")
const {reg, disp} = require("../controller/ctn")

let rt= new express.Router()

rt.get("/",disp)
rt.post("/add",reg)

module.exports=rt