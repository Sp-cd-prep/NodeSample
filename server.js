const express= require('express')
const app = express()
const routes = require('./Routes/UserRoutes');

app.use(express.json())  //body-parser

app.use('/pages',routes)

app.listen(8888,()=>{
    console.log("Server is running fine")
})

// 60 character

//$2b$10$WlIwG3QX9JNPtrTlEzIRr.isVc5eezBiRHht3Kv7Gy8jswKxWuWjS 

// $[algo]$[cost]$[salt][hash]

// cost:represents the exponent used to determine how many iterations 2^n
//salt:16byte, based on 64 encoded to 22 characters
//hash:24byte, based on 64 encoded to 31 character

