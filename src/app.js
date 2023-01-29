const express=require('express');
const app=express();
const port=8000;
const hbs=require('hbs');
const path=require("path");

const spath=path.join(__dirname,"../public");
const temp_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
console.log(spath);
app.set("view engine","hbs");
app.set('views',temp_path);
hbs.registerPartials(partial_path);
app.get("/",(req,res)=>{
    res.render("index");
})
app.use(express.static(spath));
app.get("/",(req,res)=>{
    res.send("this is home page");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("*",(req,res)=>{
    res.send("404 error page OOPs");
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})