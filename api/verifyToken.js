const jwt = require("jsonwebtoken")

function verify(req,res,next){
    const authHeader = req.headers.token
    if (authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.SecretKEY,(err,credentials)=>{
            if (err){
                res.status("403").json("Invalid Token")
            }
            req.user = credentials
            next()
        })
    }
    else {
        res.status(401).json("Authentication error")
    }

}


module.exports = verify