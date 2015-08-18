var Thermostat = function(){
  DEFAULT_TEMPERATURE = 20;
  this.currentTemperature = DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.MaxTemperature = 25;

  Thermostat.prototype.showTemperature = function () {
    return this.currentTemperature;
  };


  Thermostat.prototype.powerSaveOn = function () {
      this.MaxTemperature = 25;
  };

  Thermostat.prototype.powerSaveSwitch = function(){
    if (this.MaxTemperature === 25) {
        this.MaxTemperature = 32;
    }
    else {
      this.MaxTemperature = 25;
    }
  };


  Thermostat.prototype.increase = function () {
    if (this.currentTemperature < this.MaxTemperature) {
        this.currentTemperature ++;
      }
    return this.currentTemperature;
  };

  Thermostat.prototype.decrease = function () {
    if (this.currentTemperature > this.MINIMUM_TEMPERATURE) {
      this.currentTemperature --;
    }
    return this.currentTemperature;
  };

  Thermostat.prototype.resetTemperature = function () {
    this.currentTemperature = DEFAULT_TEMPERATURE;
    return this.currentTemperature;
  };

  Thermostat.prototype.colour = function () {
    if (this.currentTemperature < 18) {
      return "green";
    }
    else if (this.currentTemperature < 25) {
      return "gold";
    }
    else {
      return "red";
    }
  };

};
