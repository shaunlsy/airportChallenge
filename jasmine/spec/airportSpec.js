describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("set the default capacity", function() {
    it("set the default capacity to 20", function() {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
    });
  });
});
