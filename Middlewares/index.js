const express = require ("express");
const app = express();

 function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;
    if ( ticket == "free") {
        next();
    } else {
        res.status(403).send("Acess Denied")
    }
 }


 app.use(ticletChecker);

 app.get("/ride1", function() {
    res.send("You rode the first ride");
 });

 app.get("/ride2", function() {
    res.send("You rode the second ride");
 });

 app.get("/ride3", function() {
    res.send("You rode the third ride");
 });
 
app.listen(3000, () => {
console.log("Server running on http://localhost3000");
});