const { Router } = require ("express");
const adminRouter = Router();
const { AdminModel, UserModel } = require ("../db");
const { auth, JWT_SECRET, JWT_ADMIN_PASSWORD } = require ("../middlewares/auth.js");
const { z } = require ("zod");
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");

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

        const existingUser = await AdminModel.findOne({ email })

        if(existingUser){
            return res.status(409).json({
                message: "user already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await AdminModel.create({
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
            message: "internal server error",
            error: err.message
        });
    } 
    
})

adminRouter.post("/signin", async function(req,res){
   try{
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(3).max(30)
    });

    const parsedData = requiredBody.safeParse(req.body);

    if(!parsedData.success){
        return res.status(400).json({
            message: "Incorrect credentials"
        });
    }

    const { email, password }  = parsedData.data;

    const response = await AdminModel.findOne({ email });

    if(!response){
        return res.status(403).json({
            message: "User does not exists"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        response.password
    );

    if(passwordMatch){
        const token = jwt.sign(
            {
                id: response._id.toString() 
            },
            JWT_ADMIN_PASSWORD
        );

        return res.json({
            token
        });
    }

    return res.status(403).json({
        message: "Incorrect Creds"
    });
   }
   catch(err){
    return res.status(500).json({
        message: "Internal Server error"
    });
   }
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