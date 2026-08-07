// const chalk = require('chalk');

// console.log(chalk.blue("Hello world"))

// const fs = require('fs');

// fs.writeFileSync('data/data.txt' , 'hello world',);

// const path = require('path');
// const filePath = path.join(__dirname, 'data','data.txt');
// console.log(filePath);

const process = require('process');
console.log(process.argv);

require('dotenv').config();
console.log(process.env.PORT);