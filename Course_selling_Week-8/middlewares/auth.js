const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;


// user middleware
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
        res.status(403).json({
            message:"Incorrect user creds"
        });
    }
}


// admin middleware
function adminAuth(req,res,next){
    try{
        const token = req.headers.authorization;

        const response = jwt.verify(
            token,
            JWT_ADMIN_PASSWORD
        );

        req.adminID = response.id;

        next();
    }
    catch(err){
        res.status(403).json({
            message:"Incorrect admin creds"
        });
    }
}


module.exports = {
    userAuth,
    adminAuth,
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD
}