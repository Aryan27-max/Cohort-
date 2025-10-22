// write a code (representation of call back hell)
// prints hi after 1 second 
// prints hello after 3 seconds
// prints hello there after 5 seconds 

// setTimeout(function (){
//     console.log("hi");
//     setTimeout(function (){
//     console.log("hello");
//     setTimeout(function (){
//     console.log("hello there");
//     }, 5000) // after 5 seconds this gets completed
//     }, 3000) // after 3 seconds this gets completed       // the code over here is very neseted with lot of callback thereby the name call back hell 
// }, 1000) // then after 1 sec this gets completed 

// console.log("out of calback hell"); // first thi swill execute as the code compiles


// alternate method to evade callback hll but always go with PROMISES 

// function step3Done(){
//     console.log("hora hai !!");
// }

function step2Done(){
    console.log("crazy");
    setTimeout(step3Done,1000);
}

function step1Done(){
    console.log("Bro");
    setTimeout(step2Done,1000);
}
setTimeout(step1Done,1000)

