const express = require("express");
const app = express();

app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false
      }
    ]
  }
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnhealthyKidneys =
    numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    johnKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "Done!"
    })
})
app.listen(3000, () => {
    console.log("server running at port 3000");
})



























