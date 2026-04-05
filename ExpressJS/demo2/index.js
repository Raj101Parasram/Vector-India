let express= require("express")
let mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/v25fs34demo1bd").then(()=>{
    console.log(" No error in database")

}).catch(()=>{
    console.log("error in database")
})

let personsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "age":Number,
    "phone":String,
    "email":String
})

let pm= mongoose.model("person",personsch)

let app=express()
app.listen(5000)
app.use(express.json())

app.post("/add",(req,res)=>{
    let data= new pm(req.body)
    data.save().then(()=>{
        res.json({"msg":"record created"})
    }).catch(()=>{
        res.json({"msg":"error in creating data"})
    })
})

app.get("/",(req,res)=>{
    pm.find().then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json(data)
    })
})