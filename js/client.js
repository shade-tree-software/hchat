$(function () {
  console.log('connecting');
  var server = io.connect(window.location.href);
  server.on('connect', function(data){
    server.emit('nickname', prompt('Enter a nickname to identify you in the chat room'));
  });
  server.on('broadcast_message', function(broadcast_message){
    console.log("message received: " + broadcast_message);
    $('#chat_window').append('<li>' + broadcast_message + '</li>');
  });
  $('#chat_form').submit(function(e){
    e.preventDefault();
    var $chat_input = $('#chat_input');
    server.emit('message', $chat_input.val());
    $chat_input.val('');
  });
});