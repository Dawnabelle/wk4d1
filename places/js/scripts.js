function locationTest (place, time) {
  this.place = place;
  this.time = time;
}

function makeCardBody (){

}

var texas = new locationTest('Texas', 'spring 2018');

locationTest.prototype.toString = function locationTestToString() {
  return this.place + ' ' + this.time;
}


$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userInput = new locationTest($("#place").val(), $("#time").val());
    $("#places-list").append();
  });
});
