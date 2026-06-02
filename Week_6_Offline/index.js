const jwt = require("jsonwebtoken")

// generate, decode, verify 

const value = {
    name : "Aryan",
    accNum : 162433
}

// sign and generate 
const token = jwt.sign(value, "secret");
console.log(token);

// this token hs been generated usig the secret and can only 
// be verified using the secret
// this is your checkbook
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXJ5YW4i
// CJhY2NOdW0iOjE2MjQzMywiaWF0IjoxNzgwMzQzMzYwfQ.vj-rIlUpV17bGD09d4zznb
// -m2miUbjH9f-At0QBQ9nA