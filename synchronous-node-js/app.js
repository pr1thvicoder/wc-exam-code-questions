const fs = require('fs');
console.log('start');

const data = fs.readFileSync('./data.txt', 'utf-8');
console.log('data.txt file: ', data);

console.log('end');
