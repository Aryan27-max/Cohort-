// Async and Await syntx in javascript provides a way to write ansunchronous code that 
// looks and behaves like synchronous code , making it easier to read and maintain 

// async/await is basically syntactical sugar on top of promises 

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function solve (){
    await setTimeoutPromisified(1000);
    console.log("1 sec has passed");
    await setTimeoutPromisified(3000);
    console.log("3 seconds have passed");
    await setTimeoutPromisified(5000);
    console.log("5 seconds have passed");
}

solve();

