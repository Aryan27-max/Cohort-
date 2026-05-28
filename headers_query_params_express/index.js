const express = require ("express");

const app = express ();

//ADDDITION 
app.get("/add", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
     
    res.json({
        ans: a+b
    })
});

//MULTIPLICATION
app.get("/multiply", function(req,res){
    const a = parseInt(req.query.a);;
    const b = parseInt(req.query.b);
    
    res.json({
        ans: a*b
    })
});

//DIVISON 
app.get("/division", function(req,res){
    const a = parseInt(req.query,a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a/b
    })
});

//SUBSTRACTION 
app.get("/substract", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a-b
    })
});

//SERVER START 
app.listen(3000, () => {
    console.log("running at port 3000!!");
})