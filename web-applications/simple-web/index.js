"use strict";

const http = require('http');
const url = require('url');
const port = 3000;
const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;

  const name = queryObject.name || 'World';

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello, ${ name }!`);
});

server.listen(3000);
console.log(`Server is listening on port ${ port }`);
