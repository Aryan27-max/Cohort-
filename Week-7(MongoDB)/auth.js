const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";

function auth(req, res, next) {
    try{
            const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);


    req.userId = response.id;
    next();
    }
    catch(err) {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}