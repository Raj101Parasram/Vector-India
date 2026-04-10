let express= require("express")
let mongoose= require("mongoose")
let cors= require("cors")
const rt = require("./routes/rot")

mongoose.connect("mongodb://localhost:27017/fndtest").then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("Error in DB connection")
})

let app=express()
app.use(express.json())
app.use(cors())
app.use("/",rt)
app.listen(5000)