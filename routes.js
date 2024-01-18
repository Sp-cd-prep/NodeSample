// const express  = require('express')
// const router = express.Router();
// const routerTwo = require('./routesTwo')

// router.get('/',(req,res)=>{
//     res.send("home page")
// })

// router.use('/article',routerTwo)

// module.exports = router

const routes = require("express").Router();

const store = require("./store");

routes.get('/blog',store);

module.exports={routes}

// http://localhost:5555/api/blog