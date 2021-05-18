// const http = require('http');
// const server = http.createServer((req,res)=>{ 
//  console.log(req.url,req.method,req.headers);

//  res.setHeader('Content-Type','text/html');
//  res.write('<html>');
//  res.write('<head><title>My first page</title></head>');
//  res.write('<body><h1>hello world</h1></body>');
//  res.write('</html>');
//  res.end();
// });  
// server.listen(5500);     





// const http = require('http');

// const server = http.createServer((req,res)=>{ 
//  const url = req.url;

//  if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//  res.setHeader('Content-Type','text/html');
//  res.write('<html>');
//  res.write('<head><title>My first page</title></head>');
//  res.write('<body><h1>hello world</h1></body>');
//  res.write('</html>');
//  res.end();
// });
// server.listen(5500);     





// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{ 
//  const url = req.url;
//  const method = req.method;
//  if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split('=')[1];
//       fs.writeFileSync('message.txt', message);
//     });
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     return res.end();
//   }
//  res.setHeader('Content-Type','text/html');
//  res.write('<html>');
//  res.write('<head><title>My first page</title></head>');
//  res.write('<body><h1>hello world</h1></body>');
//  res.write('</html>');
//  res.end();
// });
// server.listen(5500);   


//node module system

// const http = require('http');
// const routes = require('./routes');
// const server = http.createServer(routes.handler);
// server.listen(5500);

//middleware 
// const express = require('express');
// const app = express();
// app.use('/middleware',(req,res,next) => {
//     console.log('in the middleware');
//     res.send("<h1>middleware</h1>");
// });

// app.use('/',(req,res,next) => {
//     console.log('in the another middleware');
//     res.send("<h1>response</h1>");
// });

// server.listen(5500);
 
//body parser for parsing urlencoded data

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express</h1>');
});

app.listen(5500);