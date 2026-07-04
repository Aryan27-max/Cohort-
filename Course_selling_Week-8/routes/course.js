const { Router } = require ("express");
const { userAuth } = require("../middlewares/userMiddleware");
const { PurchaseModel, CourseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase",userAuth, async function (req,res){
    const userId = req.usedId;
    const courseId = req.body.courseId;

    await PurchaseModel.create({
        userId,
        courseId
    })
    res.json({
        messag: "You have sucesfully bought the course"
    })
})

courseRouter.get("/preview",async function (req,res){
    
    const courses = await CourseModel.find({});

    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
} 