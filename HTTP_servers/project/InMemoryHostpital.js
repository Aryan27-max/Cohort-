const express = require("express");
const app = express();

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

app.listen(3000, () => {
    console.log("server running at port 3000");
})



























