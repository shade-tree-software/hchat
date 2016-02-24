/**
 * Created by ahamilton on 2/24/16.
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client){
  console.log('Client connected...');
});

app.get('/', function(req, res) {
  console.log('serving index.html');
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/:filename', function(req, res) {
  var filePath = __dirname + '/css/' + req.params.filename;
  console.log('serving CSS file: ' + filePath);
  res.sendFile(filePath);
});

app.get('/js/:filename', function(req, res) {
  var filePath = __dirname + '/js/' + req.params.filename;
  console.log('serving JS file: ' + filePath);
  res.sendFile(filePath);
});

server.listen(process.env.PORT || 8080);

