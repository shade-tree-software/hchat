var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var sendBroadcast = function(client, broadcast_message){
  client.broadcast.emit('broadcast_message', broadcast_message);
  client.emit('broadcast_message', broadcast_message);
};

io.on('connection', function(client){
  console.log('Client connected...');
  client.on('nickname', function(nickname){
    client.nickname = nickname;
    sendBroadcast(client, client.nickname + " has joined the room");
  });
  client.on('message', function(message){
    sendBroadcast(client, client.nickname + ": " + message);
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/js/:filename', function(req, res) {
  res.sendFile(__dirname + '/js/' + req.params.filename);
});

app.get('/css/:filename', function(req, res) {
  res.sendFile(__dirname + '/css/' + req.params.filename);
});

server.listen(process.env.PORT || 8080);

