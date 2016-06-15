var randomModule = (function() {
  'use strict';

  var getRandomNumberWithinRange = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return {
    getRandomNumberWithinRange: getRandomNumberWithinRange
  };
}());
