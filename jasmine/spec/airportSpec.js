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

    it("set the capacity to a new value", function() {
      airport.capacity = 6;
      expect(airport.capacity).toEqual(6);
    });
  });

  describe("can land a plane", function() {
    it("if the capacity is not full", function() {
      airport.land(plane);
      expect(airport.apron.length).toEqual(1);
    });

    it("can land multiple planes", function() {
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      expect(airport.apron.length).toEqual(3);
      expect(airport.apron).toEqual([plane, plane, plane]);
    });
  });

  describe("let a plane take off", function() {
    it("a plane can take off", function() {
      let plane2 = new Plane("plane2");
      airport.land(plane);
      airport.land(plane2);
      airport.takeoff(plane);
      expect(airport.apron).toEqual([plane2]);
    });

    // As an air traffic controller
    //So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it("a plane can take off", function() {
      let plane2 = new Plane("plane2");
      let plane3 = new Plane("plane3");
      airport.land(plane);
      airport.land(plane2);
      airport.land(plane3);
      airport.takeoff(plane3);
      expect(airport.apron).not.toContain(plane3);
      expect(airport.apron).toEqual([plane, plane2]);
    });
  });

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when the airport is full
  describe("prevent landing when airport is full", function() {
    it("prevent landing when airport is full", function() {
      for (var i = 0; i < airport.capacity; i++) {
        airport.land(plane);
      }
      expect(airport.apron.length).toEqual(20);
      expect(function() {
        airport.land(plane);
      }).toThrowError(TypeError, "Airport is full");
    });
  });
});

// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate
describe("default capacity can be overridden", function() {
  it("allows to change the default capacity", function() {
    var airport2 = new Airport(50);
    expect(airport2.capacity).toEqual(50);
  });
});
