var http = require('http');
var url = require('url');
var fs = require('fs');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var filename= process.argv[2];
//     var content=process.argv[3];
//    fs.writeFileSync(filename,content);
//     res.end(txt);
//   }).listen(8080);
  

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {


//   fs.readFile('reafile.html', (err, data)=> {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
 
  fs.appendFile("myappend","<h1>My Append Content</h1>",(err)=>{
if (err) throw err;
console.log('saved');

});
  }).listen(8080);

