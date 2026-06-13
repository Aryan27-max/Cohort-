const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Aryan73642";

const app = express();
app.use(express.json());

const users = [];

// Logger Middleware
function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// Signup Route
app.post("/signup", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Check if user already exists
    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    users.push({
        username,
        password
    });

    res.status(201).json({
        message: "User signed up successfully"
    });
});

// Signin Route
app.post("/signin", logger, function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === username &&
            users[i].password === password
        ) {
            foundUser = users[i];
            break;
        }
    }

    if (!foundUser) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        {
            username: foundUser.username
        },
        JWT_SECRET
    );

    res.json({
        token: token
    });
});

// Authentication Middleware
function auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            message: "Token missing"
        });
    }

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        req.username = decodedData.username;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

// Protected Route
app.get("/me", logger, auth, function (req, res) {
    const currentUser = req.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser) {
            foundUser = users[i];
            break;
        }
    }

    if (!foundUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});