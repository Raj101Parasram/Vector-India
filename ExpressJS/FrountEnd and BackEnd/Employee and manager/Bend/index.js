let express =require("express")
let mongoose= require("mongoose")
let cors= require("cors")
const rt = require("./router/rt")

mongoose.connect("mongodb://localhost:27017/employee-task").then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("error in DB connection")
})

let app= express()
app.listen(5000)

app.use(express.json())
app.use(cors())
app.use("/",rt)