import allowedOrigins from "../model/config/allowedOrigins.mjs";

const credentials = (req,res,next) => {
    const origin = req.headers.origin
    if(allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Credentials',true)
    }
    next()
}

export default credentials;