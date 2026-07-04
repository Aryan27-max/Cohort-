const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("./auth.js");

function userAuth(req,res,next){
    try{
        const token = req.headers.authorization;

        const response = jwt.verify(
            token,
            JWT_USER_PASSWORD
        );

        req.userID = response.id;

        next();
    }
    catch(err){
        return res.status(403).json({
            message:"Incorrect user creds"
        });
    }
}


module.exports = {
    userAuth
};