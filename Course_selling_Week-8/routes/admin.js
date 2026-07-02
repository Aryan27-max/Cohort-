const { Router } = require ("express");
const adminRouter = Router();
const { AdminModel } = require ("../db");

adminRouter.post("/signup", function(req,res){
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin", function(req,res){
    res.json({
        message: "Signin endpoint"
    })
})

adminRouter.post("/", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

adminRouter.put("/", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

adminRouter.get("/bulk", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}