var carLot = (function (carStuff) {

  carStuff.activateEvents = function (event) {
    var allCars = document.getElementsByClassName('wrapper');
    for (var i = 0; i < allCars.length; i++) {
      allCars[i].addEventListener('click', clickHandler);
    }
    inputBox.addEventListener('keyup', editDescription);
  };
  var currentCar;
  function clickHandler(event){
      currentCar = event.currentTarget.id.split("--")[1];
      var infoIdThing = document.getElementById(`info-${currentCar}`);
      //console.log("infoIdThing", infoIdThing);
      //console.log("currentCar", currentCar);
      var colorEl = event.currentTarget;
      //console.log("???????", colorEl);
      inputBox.value = "";
      inputBox.focus();
      carStuff.removeHighlight();
      var clickColor = "#0CA9E8";
      if (colorEl) {
        carStuff.addBackgroundAndBorder(currentCar, clickColor);
      }
    };

  // clears input/puts cursor to inputBox
  function editDescription () {
    var infoId = document.getElementById(`info-${currentCar}`);
    if (event.keyCode === 13) {
    //console.log("infoId", infoId);
      event.preventDefault();
      inputBox.value = '';
    } else {
      infoId.innerHTML = inputBox.value;
    }
  };
  return carStuff;

})(carLot || {});
