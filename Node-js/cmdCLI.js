const fs = require('fs');
const{ Command } = require('commander');
const program = new Command();

program
    .name('file tasks related CLI') 
    .description('CLI for file based tasks')
    .version('0.9.0')

program.command('count')
    .description('count the number of words in file')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }else{
                let words = 0;
                for(let i = 0; i<data.length; i++){
                    if (data[i] === " "){
                        words++;
                    }
                }
                console.log(`there are ${words+1} words in ${file}`);
            }
        })   
    })

program.command('count_sentences')
    .description('count the number of words in file')
    .argument('<file>','file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }else{
                let sentences = 0;
                for(let i = 0; i<data.length; i++){
                    if (data[i] === "\n"){
                        sentences++;
                    }
                }
                console.log(`there are ${sentences+1} sentences in ${file}`);
            }
        })   
    })

program.parse();

// use node cmdCLI.js -h -> to get the helper fn