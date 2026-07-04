const { Router } = require ("express");
const { z } = require("zod");
const { UserModel } = require("../db");
const userRouter = Router ();
const { auth, JWT_SECRET } = require ("../middlewares/auth.js");
const bcrypt = require("bcrypt")
require ("dotenv").config();
const jwt = require("jsonwebtoken");


userRouter.post("/signup", async function(req,res){

    try{
        const requiredBody = z.object({
            email: z.string().min(3).max(30).email(),
            password: z.string().min(3).max(100),
            FirstName: z.string().min(3).max(100),
            LastName: z.string().min(3).max(100),
        })

        const parsedDataWithSucess = requiredBody.safeParse(req.body);
        //over here .safeParse() is a zod function that finds if the req.body follows the schema defined above 

        if(!parsedDataWithSucess.success){
            res.status(400).json({
                message: "Incorrect Password",
                error: parsedDataWithSucess.error
            })
            return
        }

        const { email, password, FirstName, LastName } = parsedDataWithSucess.data;

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
            message: "you are signed up"
         })
    }
    catch(err){
            res.status(500).json({
                message: "Internal Server error",
                error: err.message
            })
        }
})   

userRouter.post("/signin", async function(req,res){
    try{
        const requiredBody = z.object({
            email: z.string().email(),
            password: z.string().min(3).maxLength(30)
        });

        const parsedData = requiredBody.safeParse(req.body);

        if(!parsedData.success){
            return res.status(400).json({
                message: "Incorrect Credentials"
            });
        }

        const { email, password } = req.body;

        const response = await UserModel.findOne({
            email
        });

        if(!response){
            return res.status(403).json({
                message: "User Does not exists"
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            response.password
        );

        if(passwordMatch) {
            const token = jwt.sign(
                {
                    id: response._id.toString()
                },
                JWT_USER_PASSWORD
            );

            return res.json({
                token
            });
        }

        return res.status(403).json({
            message: "Incorrect creds"
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server error"
        });
    }
})

userRouter.get ("/purchases", function(req,res){
    res.json({
        message: "purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}