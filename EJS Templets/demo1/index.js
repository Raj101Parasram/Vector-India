let express=require('express');
let ejs=require('ejs');
let rt=require('./routes/rt');
let app=express();
app.set('view engine','ejs');
app.use("/",rt);
app.listen(5000)