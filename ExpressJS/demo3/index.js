let express= require("express")
let mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/v25hfs34demo1bd").then(()=>{
    console.log("no error in database")
}).catch(()=>{
    console.log("error in database")
})

let student=new mongoose.Schema({
    "_id":String,
    "name":String,
    "age":Number,
    "sub":String,
    "dept":String
})

let stud= mongoose.model("students",student)

let app=express()
app.listen(5000)

app.use(express.json())

app.get("/",(req,res)=>{
    stud.find().then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json({"msg":"error in fetching data"})
    })
})

app.post("/add",(req,res)=>{
    let data= new stud(req.body)
    data.save().then(()=>{
        res.json({"msg": "record created"})
    }).catch(()=>{
        res.json({"msg":"data are not adding"})
    })
})