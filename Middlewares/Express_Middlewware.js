const express = require('express');

const app = express();

app.get('/ride1', function (req, res) {
    res.json({
        msg: "Welcome to ride 1"
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});