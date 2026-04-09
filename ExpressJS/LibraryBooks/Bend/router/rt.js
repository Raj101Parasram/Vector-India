let express = require("express")
const { addbook, issuebook } = require("../controlar/labcont")

let rt= new express.Router()

rt.post("/addbook",addbook)
rt.post("/issuebook",issuebook)

module.exports= rt