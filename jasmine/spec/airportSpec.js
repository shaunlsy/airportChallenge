describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("set the default capacity", function() {
    it("set the default capacity to 20", function() {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });

    it('set the capacity to a new value', function() {
      airport.capacity = 6;
      expect(airport.capacity).toEqual(6);
    });
  });

  describe('can land a plane', function() {
    it('if the capacity is not full', function() {
      airport.land(plane)
      expect(airport.apron.length).toEqual(1)
    });

    it('can land multiple planes', function() {
      airport.land(plane)
      airport.land(plane)
      airport.land(plane)
      expect(airport.apron.length).toEqual(3)
      expect(airport.apron).toEqual([plane, plane, plane])
    });
  });

  describe('let a plane take off', function() {
    it('a plane can take off', function() {
      let plane2 = new Plane('plane2');
      airport.land(plane)
      airport.land(plane2)
      airport.takeoff(plane)
      expect(airport.apron).toEqual([plane2])
    });

    it('a plane can take off', function() {
      let plane2 = new Plane('plane2');
      let plane3 = new Plane('plane3');
      airport.land(plane)
      airport.land(plane2)
      airport.land(plane3)
      airport.takeoff(plane3)
      expect(airport.apron).toEqual([plane, plane2])
    });
  });
});
