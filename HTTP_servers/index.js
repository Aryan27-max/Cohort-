const express = require ("express")

function CalculateSum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans = ans + i;
    }
    return ans;
}

//req and res = request and response 
const app = express();

app.get("/", function(req,res){
    const n = Number(req.query.n);
    const ans = CalculateSum(n)
    res.send(ans.toString());
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

