let home=(req,res)=>{
    res.render('home',{"name":"John Doe"})
}
let display=(req,res)=>{
    let obj={
        name:"John Doe",
        age:30,
        city:"New York",
        hobbies:["reading","traveling","cooking"],
        address:{
            street:"123 Main St",
            zip:"10001"}
    }
    res.render('disp',{"obj":obj})
}
let data=(req,res)=>{
    let arr=[{name:"John Doe", age:30, city:"New York"},
             {name:"Jane Smith", age:25, city:"Los Angeles"},
             {name:"Mike Johnson", age:35, city:"Chicago"},
             {name:"Emily Davis", age:28, city:"Houston"},
             {name:"David Wilson", age:40, city:"Phoenix"}]
    res.render('data',{"arr":arr})
}

module.exports={home, display, data}