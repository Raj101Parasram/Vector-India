let express=require("express")
let app=express()
app.listen(5000)
app.use(express.json())

app.get("/", (req,res)=>{
    res.json({"msg":"it is home page"})
})

app.get("/about",(req,res)=>{
    res.json({"msg":"it is abbout page"})
})

app.get("/search/:id",(req,res)=>{
    res.json({"msg":"it is abbout page"})
    console.log(req.params.id)
})

app.post("/add",(req,res)=>{
    console.log(req.body)
    res.json({"msg":"data stored"})
})

