const DEFAULT_CAPACITY = 20;

function Airport() {
  this.capacity = DEFAULT_CAPACITY;
  this.apron = []
}

Airport.prototype.land = function(plane) {
  this.apron.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.apron.splice( this.apron.indexOf(plane), 1);
}