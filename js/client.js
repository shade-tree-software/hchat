$(function () {
  console.log('connecting');
  var socket = io.connect(window.location.href);
  socket.on('messages', function(data){
    alert(data.hello);
  });
  $('#chat_form').submit(function(e){
    e.preventDefault();
    var message = $('#chat_input').val();
    socket.emit('messages', message);
  });
});