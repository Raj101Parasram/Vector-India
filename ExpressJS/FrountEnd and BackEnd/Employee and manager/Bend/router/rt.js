let express= require("express")
const { reg, login, emp, manager, del, edt, status } = require("../controler/ct")

let rt= new express.Router()
rt.post("/reg",reg)
rt.post("/login", login)
rt.get("/emp/:empid", emp)
rt.get("/manager", manager)
rt.delete("/del/:id",del)
rt.put("/edt", edt)
rt.put("/status/:id", status)
module.exports=rt