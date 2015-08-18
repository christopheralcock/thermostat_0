var Thermostat = function(){
  var DEFAULT_TEMPERATURE = 20;
  var currentTemperature = DEFAULT_TEMPERATURE;
  var MINIMUM_TEMPERATURE = 10;
  Thermostat.powerSaveOn;
  // MaxTemperature = 25;

// this function might be redundant
// ----------------------------------------------------

  Thermostat.prototype.temperature = function () {
    return currentTemperature;
  };
// ----------------------------------------------------


  // Thermostat.prototype.powerSaveSwitch = function(){
  //   if (MaxTemperature === 32) {
  //       this.powerSaveOn;
  //   }
  //   else {
  //     this.powerSaveOff;
  //   }
  // };

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
    else if (currentTemperature < 25) {
      return "gold";
    }
    else {
      return "red";
    }
  };

};
