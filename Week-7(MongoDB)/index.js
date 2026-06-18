const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asgrfaAryan@1213251";
const mongoose = require("mongoose");
// const dns = require("dns");

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

mongoose.connect(
  "mongodb+srv://Aryan2222:wXtwdvwOLnwOzyjq@cluster0.7n3ce9a.mongodb.net/ "
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "User created successfully",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString() ,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todos", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;

  TodoModel.create({
    title,
    userId
  })

  res.json({
    userId: userId
  })

});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId
  })

  res.json({
    todos
  })

});

function auth(req,res,next){
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  
  if (decodedData){
    req.userId = decodedData.id;
    next();
  }
  else {
    res.status(403).json({
      message: "incorrect credentials"
    })
  }
}

app.listen(3000, () => console.log("Listening at port 3000"));