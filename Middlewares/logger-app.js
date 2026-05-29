// Create a middle functiun that logs in each incoming request's HTTP 
// method, URL, Timestamp to the console

const express = require ("express")

const app = express ();
const PORT = 3000;

// MIddleware to log HTTP method, URL and timestamp
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();

    console.log(
        `[${timestamp}] ${req.method} ${req.originalUrl}`
    );

    next(); // Continue to the next middleware/route
});

//sample routes 
app.get("/", (req,res) => {
    res.send("Welcome to home page !!");
});

app.get("/about", (req,res) => {
    res.send("thi is about page !!");
});

app.post("/login", (req,res) => {
    res.send("login Sucessful !!");
});

//Start server 
app.listen(PORT, () => {
    console.log("server is running at port 3000 !!");
});