$(function () {
  console.log('starting');
  $('#url').val(window.location.href);
  $('#connect').submit(function (event) {
    console.log('connecting');
    event.preventDefault();
    var socket = io.connect($('input#url').val());
  });
});