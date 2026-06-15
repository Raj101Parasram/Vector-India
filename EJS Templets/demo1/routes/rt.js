let express=require('express');
let {home, display, data}=require('../controllers/cont');
let rt=new express.Router();
rt.get('/',home);
rt.get("/disp",display);
rt.get("/data",data);
module.exports=rt;