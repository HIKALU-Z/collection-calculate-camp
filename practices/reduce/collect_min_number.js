'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let min = Infinity;
  collection.forEach(function (val) {
    if (min >= val) {
      min = val;
    }
  });

  return min;
}

module.exports = collect_min_number;

