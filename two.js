var carLot = (function (carStuff) {
  //removes highlight from previously clicked card
  carStuff.removeHighlight = function () {
    var removeHighlight = document.getElementsByClassName("carCard");
    for (var i = 0; i < removeHighlight.length; i ++) {
      removeHighlight[i].style.backgroundColor = "#0CE8DD";
      removeHighlight[i].style.borderWidth = ".0001px";
    }
  };

    // adds background color and border to clicked card
  carStuff.addBackgroundAndBorder = function (domEL, color) {
    var clickedCard = domEL;
    var cardToBorder = document.getElementById(`car-${clickedCard}`);
    cardToBorder.style.borderWidth = "8px";
    cardToBorder.style.backgroundColor = "#C0BAFE";
  };
  return carStuff;
})(carLot || {});