  
  # To raise an error in jasmine test
  ## expect (*function()* {airport.land(plane);}).toThrowError(TypeError, "Airport is full");
  ## not expect (airport.land(plane)).toThrowError(TypeError, "Airport is full");
  
  describe("prevent landing when airport is full", function() {
    it("prevent landing when airport is full", function() {
      for (var i = 0; i < airport.capacity; i++) {
        airport.land(plane);
      }
      expect(airport.apron.length).toEqual(20);
      expect( **function()** {
        airport.land(plane);
      }).toThrowError(TypeError, "Airport is full");
    });
