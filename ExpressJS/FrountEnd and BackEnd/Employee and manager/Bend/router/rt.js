let express= require("express")
const { reg, login } = require("../controler/ct")

let rt= new express.Router()
rt.post("/reg",reg)
rt.post("/login", login)

module.exports=rt