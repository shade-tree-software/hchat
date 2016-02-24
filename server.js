var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
  console.log('Client connected...');
  client.emit('messages', {hello: 'world'});
  client.on('messages', function(data){
    console.log(data);
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/js/:filename', function(req, res) {
  res.sendFile(__dirname + '/js/' + req.params.filename);
});

server.listen(process.env.PORT || 8080);

