'use strict';
var calculate_median = function (collection) {
  let result;
  let arr = collection.filter((value, index) => index % 2 == 1);
  console.log(arr);
  arr.length % 2 == 0 ? result = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : result = arr[(arr.length - 1) / 2];
  return result;
};
module.exports = calculate_median;
