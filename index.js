const http = require('http');
var data = require('./data');
var colors = require('colors');

// const data={
//     'name':'sunil',
//     'class':'12',
//     'designation':'developer'
// }

console.log(process.argv);
 
console.log('hello'.green); // outputs green text
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(data));
    res.end();
}).listen("5000");

