$(function () {
  console.log('connecting');
  var socket = io.connect(window.location.href);
  socket.on('messages', function(data){
    console.log("message received: " + data);
    $('#chat_window').append('<li>' + data + '</li>');
  });
  $('#chat_form').submit(function(e){
    e.preventDefault();
    var message = $('#chat_input').val();
    socket.emit('messages', message);
  });
});