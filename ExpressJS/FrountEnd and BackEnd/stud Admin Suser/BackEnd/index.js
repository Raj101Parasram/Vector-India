let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const rt = require("./routs/rt")
mongoose.connect("mongodb://localhost:27017/v25hfs34resdb").then(()=>{
    console.log("ok")
}).catch(()=>{
    console.log("error in db con")
})
let app=express()
app.listen(5000)
app.use(express.json())
app.use(cors())
app.use("/",rt)