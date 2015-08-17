describe('Thermostat', function() {
  var thermostat;

  describe('it displays', function() {

    it('temperature', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).not.toBe(null);
    });

    it('default temperature of 20', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature()).toEqual(20);
    });

  });

  describe('it changes', function(){
    thermostat = new Thermostat();
    expect(thermostat.increase()).toEqual(21);
  });
});
