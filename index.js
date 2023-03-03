const http = require('http');
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1 style='color:pink;'>Garvi Sinhmar</h1>");
}).listen("5000");

