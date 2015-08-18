thermostat = new Thermostat();
thermostat.powerSaveOn();

$ (document).ready(function(){

  $("#temperature").show(function() {
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#power_saving_mode").show(function() {
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

});




// var temperature = document.getElementById('temperature');
// temperature.innerHTML = thermostat.temperature();
// temperature.style.color = thermostat.colour();

// var power_saving_mode = document.getElementById('power_saving_mode');
// power_saving_mode.onchange = function(){
//   thermostat.powerSaveSwitch();
// };

// var increase = document.getElementById('increase');
// increase.onclick = function() {
//   thermostat.increase();
//   temperature.innerHTML = thermostat.temperature();
//   temperature.style.color = thermostat.colour();
// };

// var decrease = document.getElementById('decrease');
// decrease.onclick = function(){
//   thermostat.decrease();
//   temperature.innerHTML = thermostat.temperature();
//   temperature.style.color = thermostat.colour();
// };

// var reset = document.getElementById('reset');
// reset.onclick = function(){
//   thermostat.resetTemperature();
//   temperature.innerHTML = thermostat.temperature();
//   temperature.style.color = thermostat.colour();
// };
