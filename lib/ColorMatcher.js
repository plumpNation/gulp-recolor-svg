// Generated by CoffeeScript 1.12.7
(function() {
  var Color, colorDifference, convert;

  Color = require("color");

  convert = require("color-convert");

  colorDifference = function(firstColor, secondColor) {
    var firstColorLabComponents, secondColorLabComponents, sumOfDifferencesSqaured;
    firstColorLabComponents = convert.rgb.lab.raw(Color(firstColor).rgb().array());
    secondColorLabComponents = convert.rgb.lab.raw(Color(secondColor).rgb().array());
    sumOfDifferencesSqaured = firstColorLabComponents.map(function(value, index) {
      return value - secondColorLabComponents[index];
    }).map(function(value) {
      return Math.pow(value, 2);
    }).reduce(function(sum, value) {
      return sum + value;
    }, 0);
    return Math.pow(sumOfDifferencesSqaured, 0.5);
  };

  module.exports = function(colorToMatch, maxDifference) {
    if (maxDifference == null) {
      maxDifference = 0.1;
    }
    return function(color) {
      var difference;
      difference = colorDifference(colorToMatch, color);
      return difference <= maxDifference;
    };
  };

}).call(this);