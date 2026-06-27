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

adminRouter.post("/courses", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

adminRouter.put("/courses", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

adminRouter.get("/courses/bulk", function(req,res){
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}