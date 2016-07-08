var carLot = (function (carStuff) {
  //removes highlight from previously clicked card
  carStuff.removeHighlight = function () {
    var removeHighlight = document.getElementsByClassName("carCard");
    for (var i = 0; i < removeHighlight.length; i ++) {
      removeHighlight[i].style.backgroundColor = "white";
      removeHighlight[i].style.borderWidth = ".0001px";
    }
  };

    // adds background color and border to clicked card
  carStuff.addBackgroundAndBorder = function (domEL, color) {
    var clickedCard = domEL;
    var clickColor = color;
    var cardToBorder = document.getElementById(`car-${clickedCard}`);
    cardToBorder.style.borderWidth = "8px";
    cardToBorder.style.backgroundColor = clickColor;
  };
  return carStuff;
})(carLot || {});