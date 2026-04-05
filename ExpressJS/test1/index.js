let express= require("express")
let mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/test1db").then(()=>{
    console.log("DataBase is connected")
}).catch(()=>{
    console.log("Erroe in Database connection")
})

let Bk=mongoose.Schema({
    "_id":String,
    "title":String,
    "writer":String,
    "price":Number,
    "rating":Number
})

let books= mongoose.model("booksprod",Bk)

let app=express()
app.listen(5000)
app.use(express.json())

app.post("/add",(req,res)=>{
    let data= new books(req.body)
    data.save().then(()=>{
        res.json({"msg":"record created"})
    }).catch(()=>{
        res.json({"msg":"error in creating data"})
    })
})

app.get("/",(req,res)=>{
    books.find().then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json(data)
    })
})

app.get("/search/:id",(req,res)=>{
    let ser=books.findById(req.params.id).then((ser)=>{
        res.json(ser)
    }).catch(()=>{
        res.json({"msg":"error in searching"})
    })
})