$(function () {
  console.log('starting');
  $('#connect').submit(function (event) {
    console.log('connecting');
    event.preventDefault();
    var socket = io.connect($('input#url').val());
  });
});