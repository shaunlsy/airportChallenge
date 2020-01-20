describe("Plane", function() {
  let plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("has a model", function() {
    it("returns Boeing 737", function() {
      let boeing = new Plane("Boeing 737");
      expect(boeing.model).toMatch("Boeing 737");
    });
  });
});
