'use strict';
var calculate_average = function (collection) {

  let result = 0;
  collection.forEach((value, index) => {
    if (index % 2 == 1) {
      result += value;
    }
  })
  return result / (collection.length / 2);
};
module.exports = calculate_average;
