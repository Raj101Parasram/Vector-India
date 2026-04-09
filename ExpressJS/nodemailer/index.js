let express= require("express")
let nodemailer= require("nodemailer")

let app= express()
app.listen(5000)

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "rajparasram101@gmail.com",
    pass: "dzvefcwjguxujpwu",
  },
});

app.get("/gmail", async(req,res)=>{
    try{
    const info = await transporter.sendMail({
    from: '"Example Team" <rajparasram101@gmail.com>', // sender address
    to: "rajparasram111@gmail.com, rajparasram123@gmail.com", // list of recipients
    subject: "Hello lol", // subject line
    //text: "Hello world?", // plain text body
    html: "<b>Hello world? are you there</b>", // HTML body
    });
    res.json(info)
    }
    catch{
        res.json("error on sending the email")
    }
})

