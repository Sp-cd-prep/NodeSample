

// const express=require("express");
// const app=express();
// const routes = require('./routes');

// app.use('/pages',routes)

// app.listen(5000,()=>{
//     console.log("server is running fine")
// })

//Query parameter

// const express=require("express");
// const app=express();

// const items=[
//     {id:1,name:"Ranjan"},
//     {id:2,name:"Alok"},
//     {id:3,name:"Arpit"}
// ]
// app.get('/api/items',(req,res)=>{
//     // console.log(req.query.category)
//     const {category,age} = req.query
//     console.log(category)
//     const user = items.filter(item=>item.name.includes(category))
//     if(age>=18){
//       return  res.json(user);
//     }
//     return res.send("Access denied")
// })

// app.listen(5000,()=>{
//     console.log("server is running fine")
// })

// const express=require("express")
// const app=express();


// const middleware = (req,res,next)=>{
//     console.log("middleware one is running")
//     if(!req.query.age){
//         res.send("please provide the age")
//     }
//     else if(req.query.age<18){
//             res.send("you cant access the page")
//         }
//     else{
//             next()
//         }
//     }
        
//         const middleware2 = (req,res,next)=>{
//             console.log("middleware two is running")
//             next()
//         }
        
// app.get('/',middleware,(req,res)=>{
//     res.send("Home page")
// })

// app.get('/about',middleware2,(req,res)=>{
//     res.send("about page")
// })

// app.listen(5000,()=>{
//     console.log("server is running fine")
// })



// const express = require('express')

// const app = express()
// const cors = require("cors")
// app.use(cors({
//     origin:'*'
// }))
// app.use(express.json());  //middleware to parse JSON bodies

// app.use(express.urlencoded({extended:true}))  //middleware to parse url encoded bodies

// app.post('/submit',(req,res)=>{
//     console.log(req.body);
//     res.send("Data received successfully")
// })

// app.listen(5050,()=>{
//     console.log("server is running fine")
// })


// const express = require('express')
// const app=express();
// const {routes} = require("./routes");
// const cors = require('cors')

// app.use(cors({
//     origin:"*"
// }))

// app.use('/api',routes)

// app.listen(5555,()=>{
//     console.log("server running in port 5555")
// })

const jwt = require("jsonwebtoken")
const secretKey = 'acharya'

const user = {
    name:"madan",
    id:123,
    job:"painter"
}

//create a jwt
const token  = jwt.sign(user,secretKey,{expiresIn:'3h'})
console.log('Generated Token:' ,token);

//verifying and decoding the JWT 
jwt.verify(token,secretKey,(err,decoded)=>{
    if(err){
        console.log('verification error',err)
    }
    console.log('decoded token:',decoded)
})



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFkYW4iLCJpZCI6MTIzLCJqb2IiOiJwYWludGVyIiwiaWF0IjoxNzA1NTg5Nzc4LCJleHAiOjE3MDU2MDA1Nzh9.HAv1JMHUeSlCwuyDp1UANWoYoA6QbUW2UUBs4LvMDZU