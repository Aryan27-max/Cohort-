// Promises = the promise class promises u something that i will return something in the future 

// example of promisified version of setTimeout 

// function setTimeoutPromisified(ms){
//     return new Promise (resolve => setTimeout(resolve,ms));
// }
// function callback(){
//     console.log("some time has passed");
// }

// setTimeoutPromisified(5000).then(callback)


function doAsync(resolve){
    setTimeout(resolve,5000);
}

const p = new Promise(doAsync);

function callback(){
    console.log("5 seconds have passed");
}
p.then(callback);


