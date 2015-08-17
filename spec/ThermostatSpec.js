describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('it displays', function() {

    it('temperature', function() {
      expect(thermostat.temperature).not.toBe(null);
    });

    it('default temperature of 20', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

  });

  describe('it changes', function(){

    it('the temperture upwards', function(){
      expect(thermostat.increase()).toEqual(21);
    });

    it('the temperture up to 32 but not beyond', function(){
      for (i = 20; i < 32; i++) {thermostat.increase()};
      expect(thermostat.increase()).toEqual(32);
    });

    it('the temperture up to 25 but not beyond when in energy saving mode', function(){
      for (i = 20; i < 25; i++) {thermostat.increase()};
      expect(thermostat.increase()).toEqual(25);
    });


    it('the temperture downwards', function(){
      expect(thermostat.decrease()).toEqual(19);
    });

    it('the temperture up to 32 but not beyond', function(){
      for (i = 20; i > 10; i--) {thermostat.decrease()};
      expect(thermostat.decrease()).toEqual(10);
    });

  });
});
