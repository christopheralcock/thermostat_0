var Thermostat = function(){
  var DEFAULT_TEMPERATURE = 20;
  var currentTemperature = DEFAULT_TEMPERATURE;
  var MINIMUM_TEMPERATURE = 10;
  Thermostat.powerSaveOn;

  Thermostat.prototype.temperature = function () {
    return currentTemperature;
  };

  Thermostat.prototype.powerSaveOff = function () {
      MaxTemperature = 32;
  };
  Thermostat.prototype.powerSaveOn = function () {
      MaxTemperature = 25;
  };

  Thermostat.prototype.increase = function () {
    // if current temp less than 32, current ++, else current tepm
    if (currentTemperature < MaxTemperature) {
        currentTemperature++;
      }
    return currentTemperature;
  };

  Thermostat.prototype.decrease = function () {
    if (currentTemperature > MINIMUM_TEMPERATURE) {
      currentTemperature--;
    }
    return currentTemperature;
  };

  Thermostat.prototype.resetTemperature = function () {
    currentTemperature = DEFAULT_TEMPERATURE;
    return currentTemperature;
  };

  Thermostat.prototype.colour = function () {
    if (currentTemperature < 18) {
      return "green";
    }
  };




};
