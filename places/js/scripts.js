// function Destination() {
//   place = "";
//   time = "";
//   notes = "";
//
// }

function locationTest (place, date, notes) {
  this.place = place;
  this.date = date;
  this.notes = notes;
}


// var texas = new locationTest('Texas', 'spring 2018');

// locationTest.prototype.toString = function locationTestToString() {
//   return this.place + ' ' + this.time +' '+ this.notes;
// }


$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userInput = new locationTest($("#place").val(), $("#date").val(), $('#notes').val());
    $("#places-list").append(
      '<div class="card">' +
      '<div class="card-header bg-info">' + userInput.place +
      '</div>' +
      '<div class="card-body card-content danger">' + userInput.notes +' '+ userInput.date +
      '</div>' +
      '</div>'
    );
  });
});
