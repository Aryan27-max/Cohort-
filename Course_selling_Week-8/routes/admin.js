const { Router } = require ("express");
const adminRouter = Router();
const { AdminModel } = require ("../db");
const { auth, JWT_SECRET } = require ("../middlewares/auth.js");
const { z, email } = require ("zod");

adminRouter.post("/signup", async function(req,res){
    
    try{
        const requiredBody = z.object({
            email:z.string().min(3).max(100).email(),
            name: z.string().min(3).max(100),
            password: z.string().min(3).max(3)
        })

        const parsedDataWithSucess = requiredBody.safeParse(req.body);
// over her the safeParse

        if()
    }
    
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