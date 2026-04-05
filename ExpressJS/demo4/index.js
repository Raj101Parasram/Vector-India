let express= require("express")
let mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/test1db").then(()=>{
    console.log("database connection is correct")
}).catch(()=>{
    console.log("error in database connection")
})

let sData=mongoose.Schema({
    "_id":String,
    "name":String,
    "class":String,
    "age":Number,
    "phone":String
})

let student=new mongoose.model("stdData",sData)

let app= express()
app.listen(5000)

app.use(express.json())

app.get("/",async(req,res)=>{
    try{
        let data= await student.find()      
        res.json(data)
    }
    catch{
        res.json({"msg":"error in featching data"})
    }
})

app.post("/add", async(req,res)=>{
    try{
        let data= new student(req.body)
        await data.save()
        res.json({"msg":"record is created"})
    }
    catch{
        res.json({"msg":"error in adding data"})
    }
})

app.get("/search/:id",async(req,res)=>{
    try{
        let obj= await student.findById(req.params.id)
        res.json(obj)
    }
    catch{
        res.json({"msg":"error in searching in id"})
    }
})

app.get("/search/:fn/:val",(req,res)=>{
    student.find({[req.params.fn]:req.params.val}).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json({"msg":"error in searching by obj and value"})
    })
})