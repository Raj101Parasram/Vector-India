let express= require("express")
let mongoose= require("mongoose")
let cors= require("cors")

mongoose.connect("mongodb://localhost:27017/labrarysystem").then((e)=>{
    console.log("ok") }).catch(()=>{
        console.log("error in db connction")
    })


let app=express()
app.listen(5000)

app.use(express.json())
app.use(cors)

