// // 
// //  debugger

// // const name="ganesh"
// // const age=29

// // console.log(age)
// // console.log(name)

// //  debugger
// // const name="ganesh"
// // const age=28

// // console.log(age)
// // console.log(name)

// // debugger

// // outerFun()
// // function outerFun(){
// //     console.log("outer Function")
// //     middleFun()
// // }

// // function middleFun(){
// //     console.log("middle Function")

// //     let a=2;
// //     let b=4;
// //     console.log(a+b)
// //     innerFun()
// // }
// // function innerFun(){
// //     console.log("inner Function")
// //     let x=3;
// //     let y=4;
// //     console.log(x+y)
// // }

// function outer() {
//     let  name = "ganesh"
//     var age = 22;

//     function inner() {
//         console.log("my age is ", age)

//         console.log(name)
//     }
//     inner()
// }

// outer()
// console.log('my age is ',age)

// debugger
// function outer(){
//     let name="ganesh"
//     let surname="ghode"
//     function inner(){
//         console.log(name)
//         console.log(surname)
//     }
//     inner()
// }
// outer()


// const mul=(num)=>num*num
// const add=(num)=>num+num
// const random=()=>Math.random()

let arr=['banana','karela','aalu','mango','pinapple']

// arr.forEach(function(i){
//     console.log(i)
// })

// arr.forEach((i)=>{
//     console.log(i)
// })

// arr.forEach(()=>console.log("hello"))

// const months=['jan','feb','march','dec','nov','aug']

// // const data=months.map((month)=>{
// //     console.log(month)
// //     // return month.toUpperCase()
// // })

// const val=months.map((data)=>{
//     //   console.log(data)
//     return data.toUpperCase()
// })

const dayFull = [ "Sunday", "Monday", "Tuesday", "Wednesday","thursday","friday","saturday"]

// const mapping=dayFull.map((data,index)=>{
//   console.log(data.length)
//   return data.index>=3
// })

console.log("*************")
// const fill=dayFull.filter((arr,data)=>{
//     console.log(arr,data+1)
//     return data.length>=8
// })

// const val=dayFull.filter((data,index)=>
// {
//     console.log(index,data)
//     // return index>=5
//     return data.toUpperCase().includes('F')
// })


const data=[2,4,3,]   

// data.reduce((data)=>{console.log(data)},0)
// const hi=data.reduce((acc,current)=>{
//     console.log("th acc: ",acc)
//     console.log("th current: ",current)
//     const total=acc+current
//     console.log("the total: ",total)
//     return total
// },0)
// console.log("th hi:",hi)


const colours=['red','green','blue','yellow','black']

const [first,second,third,four]=colours;
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(four)

const user={
    name:'ganesh',
    age:22,
    degree:"comp"
}
console.log(user)
const {name,degree,hi}=user
console.log(name)
console.log(degree)
// console.log(hi)

