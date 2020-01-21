// As an air traffic controller 
// To ensure safety 
// I want to prevent takeoff when weather is stormy 

describe("Weather", function(){

  var weather;

  beforeEach(funciton(){
    weather = new Weather();
  })

  describe("Weather is stormy", fucntion(){
    it("returns true when weahter is stormy", function(){
      spyOn(weather,'stormy').and.returnValue(true);
      expect(weather.stormy).toEqual(true);
    })
  });
});