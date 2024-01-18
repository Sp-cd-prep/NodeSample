// const Allauth = (req,res,next)=>{
//     console.log("We are on the first Auth");
//     next()
// }

// const SpecificAuth = (req,res,next)=>{
//     console.log("We are on the second Auth");
//     next()
// }

// module.exports  = {Allauth,SpecificAuth}

const jwt  = require('jsonwebtoken')
const secretKey = 'acharya'

const auth  = (req,res,next)=>{

    const data = req.headers["authorization"]
    console.log(data,"token")
    const token = data.split(' ')[1]
    console.log(token)

    if(token){
    jwt.verify(token,secretKey,(err,validate)=>{
        if(err){
            return res.send("Error while accessing",err)
        }
        if(validate){
            return next()
        }
        return res.send("user is not authorized")
    })
}
else{
    return res.send({msg:"Email id is not registered"})
}
}

module.exports = auth







