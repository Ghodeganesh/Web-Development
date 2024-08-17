// // console.log("hello how are you!!")
// // console.log(process)

// const fs=require("fs")
// // const { dirname } = require("path")
// // console.log(fs)

// console.log(__dirname)

// // fs.writeFileSync(__dirname+"/abc.txt","hello world")
// fs.writeFileSync("abc.txt","hello world")


const fs=require("fs")

const http=require('http')
const server=http.createServer((req,res)=>{
    res.end({data:"hello"})
})

server.listen(4000)