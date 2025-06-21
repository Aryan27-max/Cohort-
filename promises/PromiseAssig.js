// Aim - write a function which -
//     1. reads content of file 
//     2. trims the extra space from the left and right of the file 
//     3. writes it back to the file 
//     4. return the content of the file 

const fs = require("fs").promises; // promisifed the fs file 

async function cleanFile(fileName){ // defining an async function called cleanFile and adding a try catch block 
    try {
        // step 1 : reading the file contents 
        let content = await fs.readFile(fileName,"utf-8"); 

        // step 2 : trims spaces on both ends 
        let trimmedContent = content.trim();

        //step 3 : writes it back to the same file 
        await fs.writeFile(fileName  , trimmedContent , "utf-8");

        console.log("file has been cleaned and saved sucessfully.");

        //step 4 : return the trimmed content 
        return trimmedContent;

    }catch (error) {
        console.error("Error.", error.message); // error meassage in case of nay errors 
    }
}

// usage 
cleanFile("promises/a.txt").then ((data) => {
    console.log("final trimmed content: ",data);// function to return the contents of the file 
});
