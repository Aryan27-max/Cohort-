const express = require ('express');
const jwt = require ('jsonwebtoken');
const JWT_SECRET="wjkyhfgq4yuweatgfiweg"

const app = express();
app.use(express.json());

const users = [];


app.post("/signup", function(req,res){
    
    const username = req.body.username;
    const password = req.body.password;

    users.push ({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })
    console.log(users);
})

app.post("/signin", function (req,res){
    
    const username = req.body.username;
    const password = req.body.password;

    //maps and filters 
    let FoundUsers = null;

    for (let i =0 ; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            FoundUsers = users[i] 
        }
    }

    if(FoundUsers){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        
        // FoundUsers.token = token; No need to stores as JWT is stateless
        
        res.json({
            token: token
        })
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})

//creating an authenticated endpoint
app.get("/me", function(req,res){

    try{
        const token = req.headers.token;

        const decodedInformation = jwt.verify(token, JWT_SECRET);

        res.json({
            username: decodedInformation.username
        });

    }catch(err){
        res.status(403).json({
            message: "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log("server running at port 3000");
});
