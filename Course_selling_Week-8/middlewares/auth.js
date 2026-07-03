const jwt = require ("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

function auth(req,res, next){
    try{
        const token = req.headers.authorization;

        const response = jwt.verify(token, JWT_SECRET);

        req.userID = response.id;
        next();
    }
    catch(err){
        res.status(403).json({
            message:"Incorrect creds"
        })
    }
}

modeule.exports = {
    auth,
    JWT_SECRET
}