describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
    thermostat.powerSaveOn();
  });

  describe('it displays', function() {

    it('temperature', function() {
      expect(thermostat.showTemperature).not.toBe(null);
    });

    it('default temperature of 20', function() {
      expect(thermostat.showTemperature()).toEqual(20);
    });

  });

  describe('it changes', function(){

    it('the temperture upwards', function(){
      expect(thermostat.increase()).toEqual(21);
    });

    it('the temperture up to MaxTemperature but not beyond', function(){
      thermostat.powerSaveSwitch();
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

  describe('it has a powersaving button', function(){
    it('which increases MaxTemperature when turned off', function(){
      thermostat.powerSaveSwitch();
      expect(thermostat.MaxTemperature).toEqual(32);
    });

    it('which decreases the MaxTemperature when turned on', function(){
      expect(thermostat.MaxTemperature).toEqual(25);
    });

  });

  describe('it has a reset button', function(){
    it('which resets the temperature to default temperature', function(){
      thermostat.resetTemperature();
      expect(thermostat.showTemperature()).toEqual(20);
    });
  });

  describe('it designates colour', function(){
    it('green for under 18', function(){
      for (i = 20; i > 17; i--) {thermostat.decrease()};
      expect(thermostat.colour()).toEqual("green");
    });

    it('yellow for under 18-24', function(){
      for (i = 20; i < 24; i++) {thermostat.increase()};
      expect(thermostat.colour()).toEqual("gold");
    });

    it('red for over 25', function(){
      for (i = 20; i < 30; i++) {thermostat.increase()};
      expect(thermostat.colour()).toEqual("red");
    });

  });


});
