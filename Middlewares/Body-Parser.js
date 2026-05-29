const express = require("express");

const app = express();

app.use(express.json());

app.post("/sum", (req,res) => {
    console.log(req.body);

    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b 
    });
});

app.listen(3000, () => {
    console.log("Server is running is at port 3000!!");
});