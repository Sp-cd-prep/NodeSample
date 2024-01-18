const express = require('express')
const routesTwo = express.Router();
const data = require('./data');

routesTwo.get('/bollywood',(req,res)=>{
    const result = data.filter((item)=>item.category === "Bollywood")
    res.send(result)
})

routesTwo.get('/hollywood',(req,res)=>{
    res.send(data)
})

module.exports = routesTwo

