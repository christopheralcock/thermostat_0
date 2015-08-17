var Thermostat = function(){
  var DEFAULT_TEMPERATURE = 20;
  var currentTemperature = DEFAULT_TEMPERATURE;

  Thermostat.prototype.temperature = function () {
    return currentTemperature;
  };

  Thermostat.prototype.increase = function () {
    currentTemperature++;
    return currentTemperature;
  };
};
