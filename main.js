// const chalk = require('chalk');

// console.log(chalk.blue("Hello world"))

// const fs = require('fs');

// fs.writeFileSync('data/data.txt' , 'hello world',);

// const path = require('path');
// const filePath = path.join(__dirname, 'data','data.txt');
// console.log(filePath);

const http = require('http');
require('dotenv').config();

const server = http.createServer((req,res) => {
    console.log(`request recieved from the url : ${req.url}`);
    
    res.statusCode = 200;
    res.setHeader('Content-Type ', 'text/plain');
    res.end('Hello from your Node-JS HTTP Server!');
});



const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT , () => {
    console.log(`server is running at local host : ${PORT}`);
});
