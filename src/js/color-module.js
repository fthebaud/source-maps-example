/* exported colorModule */
var colorModule = (function() {
  'use strict';

  var getRandomNumberFrom0To255 = function() {
    return randomModule.getRandomNumberWithinRange(0, 255);
  };

  var getRandomObjectColorRGB = function() {
    var r = getRandomNumberFrom0To255();
    var g = getRandomNumberFrom0To255();
    var b = getRandomNumberFrom0To255();
    return {
      r: r,
      g: g,
      b: b
    };
  };

  var getRandomColorRGB = function() {
    var color = getRandomObjectColorRGB();
    // TODO : uglify seems to have a problem with `
    // return `rgb(${color.r}, ${color.g}, ${color.b})`;
    return 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
  };

  return {
    getRandomColorRGB: getRandomColorRGB
  };
}());
