//Create a middleware that counts total number of requests sent to a server. 
// Also create an endpoint that exposes it.

const express = require ("express");

const app = express();
const PORT = 3000;

// request counter 
let TotalRequests = 0 ;

//Middleware 
app.use((req, res, next) => {
    TotalRequests++;
    console.log(`total requests ${TotalRequests}`)
    next ();
});

// Normal Routes
app.get("/", (req,res) => {
    res.send("Home Page");
})

app.get("/about", (req,res) => {
    res.send("About Page!!");
});

// Endpoint to expose request count
app.get("/request-count", (req,res) => {
    res.json({
        TotalRequests: TotalRequests
    });
});

app.listen(PORT, () => {
    console.log("Server running at port 3000 !!");
});