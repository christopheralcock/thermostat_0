var Thermostat = function(){
  var DEFAULT_TEMPERATURE = 20;
  var currentTemperature = DEFAULT_TEMPERATURE;

  Thermostat.prototype.temperature = function () {
    return currentTemperature;
  };

  Thermostat.prototype.increase = function () {
    // if current temp less than 32, current ++, else current tepm
    if (currentTemperature < 32) {
        currentTemperature++;
      }
    return currentTemperature;
  };

  Thermostat.prototype.decrease = function () {
    if (currentTemperature > 10) {
      currentTemperature--;
    }
    return currentTemperature;
  };

};
