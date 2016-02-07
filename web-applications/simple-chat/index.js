"use strict";

const http = require('http');
const fs = require('fs');
const port = 3000;
const handler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('./index.html', (err, data) => {
    if (err) {
      return console.log(err);
    };

    res.end(data);
  });
};
const server = http.createServer(handler);
const io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(3000);
console.log(`Server is listening on port ${ port }`);
