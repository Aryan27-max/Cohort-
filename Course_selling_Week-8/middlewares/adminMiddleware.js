const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("./auth.js");

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
        return res.status(403).json({
            message:"Incorrect admin creds"
        });
    }
}


module.exports = {
    adminAuth
};