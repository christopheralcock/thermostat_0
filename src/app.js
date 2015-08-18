thermostat = new Thermostat();
thermostat.powerSaveOn();

$ (document).ready(function(){

  $("#temperature").show(function() {
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#power_saving_mode").change(function() {
    thermostat.powerSaveSwitch();
  });


  $("#increase").click(function() {
    thermostat.increase();
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#decrease").click(function() {
    thermostat.decrease();
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#reset").click(function() {
    thermostat.resetTemperature();
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

});
