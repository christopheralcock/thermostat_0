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

  $("#increase").mouseenter(function() {
    $(this).animate({
        height: '+=20px'
    });
  });

  $("#increase").mouseleave(function() {
    $(this).animate({
        height: '-=20px'
    });
  });


  $("#decrease").click(function() {
    thermostat.decrease();
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#decrease").mouseenter(function() {
    $(this).animate({
        height: '+=20px'
    });
  });

  $("#decrease").mouseleave(function() {
    $(this).animate({
        height: '-=20px'
    });
  });



  $("#reset").click(function() {
    thermostat.resetTemperature();
    temperature.innerHTML = thermostat.showTemperature();
    temperature.style.color = thermostat.colour();
  });

  $("#reset").mouseenter(function() {
    $(this).animate({
        height: '+=20px'
    });
  });

  $("#reset").mouseleave(function() {
    $(this).animate({
        height: '-=20px'
    });
  });

});
