'use strict';

function compute_average(collection) {
  //在这里写入代码
  let average =0;
  for (let i =0;i<collection.length;i++) {
    average += collection[i];
  }
  return (average/collection.length);
}

module.exports = compute_average;

