const express = require("express");
const app = express();

const users = [{
  name: "john",
  kidneys:[{
    healthy : false
  }]
}];

app.use(express.json());

app.get("/", function(req,res){
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for(let i=0; i < johnKidneys.length; i++){
    if (johnKidneys[i].healthy){
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  })
})


app.post("/", function(req,res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done!"
  })
})

app.put("/",function(req,res){
  for(let i=0 ; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy=true;
  }
})

app.listen(3000, () => {
  console.log("Server running at port 3000")
})



// td

// const express = require("express");
// const app = express();

// app.use(express.json());

// // In-memory database
// const users = [
//   {
//     name: "john",
//     kidneys: [
//       { healthy: true },
//       { healthy: true },
//       { healthy: true },
//       { healthy: false }
//     ]
//   }
// ];

// /**
//  * GET /
//  * Returns kidney statistics
//  */
// app.get("/", function (req, res) {
//   const kidneys = users[0].kidneys;
//   const numberOfKidneys = kidneys.length;

//   let numberOfHealthyKidneys = 0;

//   for (let i = 0; i < kidneys.length; i++) {
//     if (kidneys[i].healthy === true) {
//       numberOfHealthyKidneys++;
//     }
//   }

//   const numberOfUnhealthyKidneys =
//     numberOfKidneys - numberOfHealthyKidneys;

//   res.json({
//     numberOfKidneys,
//     numberOfHealthyKidneys,
//     numberOfUnhealthyKidneys
//   });
// });

// /**
//  * POST /
//  * Adds a new kidney
//  * Body: { "isHealthy": true | false }
//  */
// app.post("/", function (req, res) {
//   const isHealthy = req.body.isHealthy;

//   // Validation
//   if (typeof isHealthy !== "boolean") {
//     return res.status(400).json({
//       error: "isHealthy must be a boolean"
//     });
//   }

//   users[0].kidneys.push({
//     healthy: isHealthy
//   });

//   res.json({
//     msg: "Done!"
//   });
// });

// /**
//  * PUT /
//  * Makes all kidneys healthy
//  */
// app.put("/", function (req, res) {
//   const kidneys = users[0].kidneys;

//   for (let i = 0; i < kidneys.length; i++) {
//     kidneys[i].healthy = true;
//   }

//   res.json({
//     msg: "All kidneys healed!"
//   });
// });

// /**
//  * DELETE /
//  * Removes all unhealthy kidneys
//  */
// app.delete("/", function (req, res) {
//   const kidneys = users[0].kidneys;
//   const newKidneys = [];

//   for (let i = 0; i < kidneys.length; i++) {
//     if (kidneys[i].healthy === true) {
//       newKidneys.push(kidneys[i]);
//     }
//   }

//   users[0].kidneys = newKidneys;

//   res.json({
//     msg: "Unhealthy kidneys removed!"
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


// uiedifgf