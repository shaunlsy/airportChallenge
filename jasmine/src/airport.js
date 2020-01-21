const DEFAULT_CAPACITY = 20;

function Airport(capacity = DEFAULT_CAPACITY) {
  this.capacity = capacity;
  this.apron = [];
}

Airport.prototype.land = function(plane) {
  if (this.apron.length >= this.capacity) {
    throw new TypeError("Airport is full");
  }
  this.apron.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  this.apron.splice(this.apron.indexOf(plane), 1);
};
