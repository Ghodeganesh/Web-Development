// console.log("Express servers")

// const express=require("express")
const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    // console.log(res.hello)
    // res.send("<h1>Hello Backend</h1>");
    res.json({"message":"<h1>Hello Backend</h1>"})
})
app.get('/home',(req,res)=>{
    res.send("<h1>I Will Dominate Backend</h1>")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Login Page Here...</h1>")
})

app.listen(3000,()=>{
    console.log("server runing")
})
