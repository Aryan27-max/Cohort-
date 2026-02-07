const express = require("express");
const app = express();

const users = [{
  name: "john",
  kidneys:[{
    healthy : false
  }]
}];

app.use(express.json());

//GET kidneys stats
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
  res.json({});
})

//removing all the unhealthy kidneys 
app.delete("/", function(req,res){

  //only ifone unhealthy kidnet is there do this, elese return 411(wrong input)

  if(isThereAtleastOneUnhealthyKidney){
    
  const newKidneys = [];
  for(let i=0 ; i<users[0].kidneys.length; i++){
    if (users[0].kidneys[i].healthy){  
    newKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({msg: "done"}) 
  } 
  else
  {
    res.status(411).json({
      msg: "you have no bad kidneys" 
    });
  }
})

function isThereAtleastOneUnhealthyKidney(){
  let atleastOneHelathyKidney = false;
  for(let i=0 ; i<users[0].kidneys.length; i++){
    if (users[0].kidneys[i].healthy){
    atleastOneHelathyKidney = true;
    }
  }
}
app.listen(3000, () => {
  console.log("Server running at port 3000")
})


//server checks (to check the edge cases if the user sends some gibrish)
