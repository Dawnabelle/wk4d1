function locationTest (place, time) {
  this.place = place;
  this.time = time;
}

var texas = new locationTest('Texas', 'spring 2018');

locationTest.prototype.toString = function locationTestToString() {
  return this.place + ' ' + this.time;
}
