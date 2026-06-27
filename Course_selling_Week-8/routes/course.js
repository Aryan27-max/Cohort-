const { Router } = require ("express");
const courseRouter = Router();

courseRouter.post("/purchase", function (req,res){
    res.json({
        messag: "purchase endpoint"
    })
})

courseRouter.get("/preview", function (req,res){
    res.json({
        messag: "preqview endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
} 