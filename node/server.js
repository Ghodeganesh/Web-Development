// const express=require('express')
// const app=express()

// app.get('/',(req,res)=>{
//      res.send("hello server started")
// })
// app.post('/',(req,res)=>{
//     res.send("<h1>Hello post Request</h1>")
// })
// app.patch('/',(req,res)=>{
//     res.send("<h1>Hello patch Request</h1>")
// })
// app.delete('/',(req,res)=>{
//     res.send("<h1>Hello delete Request</h1>")
// })
// app.head('/',(req,res)=>{
//     // console.log("Head it is!!")
//     res.json({
//         "message":"congo"
//     })
// })
// app.listen(9000,()=>{
//     console.log("server started at 9000!!")
// })

const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("<h2>server started!!</h2>")
})

app.listen(5000)