const { Router } = require ("express");
const adminRouter = Router();
const { AdminModel, UserModel } = require ("../db");
const { auth, JWT_SECRET } = require ("../middlewares/auth.js");
const { z, email } = require ("zod");

adminRouter.post("/signup", async function(req,res){
    
    try{
        const requiredBody = z.object({
            email:z.string().min(3).max(100).email(),
            password: z.string().min(3).max(40),
            FirstName: z.string().min(3).max(100),
            LastName: z.string().min(3).max(100),
        })

        const parsedDataWithSucess = requiredBody.safeParse(req.body);
// over her the .safeParse() that check if the req.body follows the schema defined above 
        if(!parsedDataWithSucess.success){
            res.status(400).json({
                message: "Incorrect password",
                error: parsedDataWithSucess.error
            })
            return
        }

        const{ email,password, FirstName, LastName } = parsedDataWithSucess.data;

        const existingUser = await UserModel.findOne({ email })

        if(existingUser){
            return res.status(409).json({
                message: "user already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            FirstName: FirstName,
            LastName: LastName
        })

        res.json({
            message: "you are signed in"
        })
    }
    catch(err){
        res.status(500).json({
            message: "internal server error"
        });
    } 
    
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