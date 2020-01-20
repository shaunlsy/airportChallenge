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
});
