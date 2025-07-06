
function setTimeoutPromisified(duration){
    return new Promise (function (resolve){
        setTimeout(resolve,duration)
    });
}

// There is a custom function called setTimeoutPromisified that takes a duration (in milliseconds).
// Inside it, we return a new Promise, which takes a resolve function as its argument.
// We pass this resolve function to the built-in setTimeout as a callback, so when the 
// duration has passed, setTimeout will call resolve(), thus resolving the Promise.

//Promise chaining 

setTimeoutPromisified(1000).then(function(){
    console.log("hi !!");
    return setTimeoutPromisified(3000)
}).then (function(){
    console.log("hello !!");
    return setTimeoutPromisified(5000)
}).then (function (){
    console.log("hello there !!");
});
