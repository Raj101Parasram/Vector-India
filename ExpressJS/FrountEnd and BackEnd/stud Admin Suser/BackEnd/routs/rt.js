let express=require("express")
const { login, reg } = require("../controlers/usercontroler")
let rt=new express.Router()
rt.post("/login",login)
rt.post("/reg",reg)

module.exports=rt