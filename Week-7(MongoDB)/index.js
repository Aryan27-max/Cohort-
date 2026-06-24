const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const { z } = require ("zod");

// Optional DNS fix for MongoDB Atlas
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

mongoose.connect(
  "mongodb+srv://Aryan2222:wXtwdvwOLnwOzyjq@cluster0.7n3ce9a.mongodb.net/aryan-todo"
);

const app = express();

app.use(express.json());

app.post("/signup", async(req,res) => {

    const requiredBody  = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    const parsedDataWithSucess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSucess.success){
        res.json({
            message: "Incorrect format"
        })
        return
    }


    const{ email,password, name } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if(existingUser){
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
        email,
        password: hashedPassword,
        name
    })

    res.json({
        message: "you are signed in"
    })
})

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if(!response){
    res.status(403).json({
        message:"User does not exist"
    })
    return
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});