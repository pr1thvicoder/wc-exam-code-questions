const fs = require('fs');
console.log('start');

fs.readFile('./data.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log('data.txt contains ', data);
});
console.log('end');
