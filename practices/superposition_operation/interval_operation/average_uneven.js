'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let arr = collection.filter(value => value%2 == 1);
  return arr.reduce((previousValue, currentValue) => previousValue +currentValue)/arr.length;
}

module.exports = average_uneven;
