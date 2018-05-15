'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.filter(value => value%2 == 0).reduce((previousValue, currentValue) => previousValue +currentValue);
}

module.exports = amount_even;
