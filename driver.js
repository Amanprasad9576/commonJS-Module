//const search_lib =require('./search.js');

//console.log(search_lib);
const fs = require('fs/promises');

async function readSampleFile(){
    const data = await fs.readFile('./sample.txt','utf-8');
    console.log(data);
}
readSampleFile();

async function writeSampleFile(){
await fs.writeFile('./sample.txt', 'test');
}


async function appendSampleFile(){
    await fs.appendFile('./sample.txt','pass');
}
appendSampleFile();
readSampleFile();