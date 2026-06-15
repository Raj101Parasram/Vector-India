let http= require("http")
let fs= require("fs")

let app= http.createServer((req,res)=>{
    if (req.url=="/")
    {
        fs.readFile("demo1.html", "utf-8", (err,data)=>{
            if(err)
            {
                res.end("error in reading file")
            }
            else
            {
                // console.log(data)
                res.end(data)
            }
        })
    }
})

app.listen(5000)