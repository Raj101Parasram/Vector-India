let express= require("express")
let multer= require("multer")
let mongoose= require("mongoose")

let app= express()
app.listen(5000)
app.use(express.json())


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './updfile')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })


app.use(express.urlencoded({"extanded":true}))
app.use("/imgs", express.static("./updfile"))
app.post("/add", upload.single("img"),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.json({"msg":"data recive"})
})