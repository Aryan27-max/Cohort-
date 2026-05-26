// What is JSON?
// JSON stands for JavaScript Object Notation.
// It's a text format used to store and exchange data between applications, servers, APIs, databases, etc.
// Think of it as a way of representing data using key-value pairs.
// Example JSON
// {  "name": "Aryan",  "age": 21,  "isStudent": true}
// Here:
// "name" is a key and "Aryan" is its value
// "age" is a key and 21 is its value
// "isStudent" is a key and true is its value


// 1. What is Fetch?

// fetch() is a built-in JavaScript function used to make HTTP requests.

// ✅ Built into modern browsers

// ✅ Built into Node.js v18+

// ❌ No extra installation needed

//POST(Using fetch)
// async function main (){
//     const response = await
//     fetch("https://www.postb.in/1779807816467-2487155345734",
//         {
//         method: "POST",
//     },
// );
// const TextualData = await response.text();
// console.log(TextualData)

// }


// 2. What is Axios?

// Axios is a third-party HTTP client library.

// WHY IS AXIOS BETTER FETCH
// Fetch needs extra .JSON calls to specify data type 

// const axios = require ("axios");

// //POST(Using Axios)
// async function main (){
//     const response = await axios.post("https://www.postb.in/1779807816467-2487155345734");
//     console.log(response.data);
// }


main();




// Axios GET with Headers

const axios = require("axios");

async function main() {

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
            headers: {
                Authorization: "Bearer my-token",
                "Content-Type": "application/json"
            }
        }
    );

    console.log(response.data);
}



// Axios POST with Body and Headers


async function main() {

    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",

        {
            title: "Hello",
            body: "My first post",
            userId: 1
        },

        {
            headers: {
                Authorization: "Bearer my-token",
                "Content-Type": "application/json"
            }
        }
    );

    console.log(response.data);
}

// Axios PUT with Body and Headers
// Used to update existing data.


async function main() {

    const response = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/1",

        {
            title: "Updated Title",
            body: "Updated Content"
        },

        {
            headers: {
                Authorization: "Bearer my-token",
                "Content-Type": "application/json"
            }
        }
    );

    console.log(response.data);
}

// Axios DELETE with Headers

async function main() {

    const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1",

        {
            headers: {
                Authorization: "Bearer my-token"
            }
        }
    );

    console.log(response.data);
}
