'use strict';
var even_group_calculate_average = function (collection) {
  let arr = collection.filter((value, index) => index % 2 == 1 && value % 2 == 0).sort((a, b) => a - b);
  if (arr.length == 0) {
    return [0];
  }
  let sum = 0;
  let n = 0;
  return arr.reduce((allCollection, currentValue, index, array) => {
    sum += currentValue;
    n++;
    if (index == array.length - 1 || array[index].toString().length != array[index + 1].toString().length) {
      allCollection.push(sum / n);
      sum = 0;
      n = 0;
    }
    return allCollection;
  }, [])
};


module.exports = even_group_calculate_average;
