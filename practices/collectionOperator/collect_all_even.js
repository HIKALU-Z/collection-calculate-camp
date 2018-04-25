'use strict';

/**
 * 判断参数是否为数组
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}


function collect_all_even(collection) {
  //在这里写入代码
  if (!isArray(collection)) {
    return;
  }
  let result = [];
  collection.forEach(item => {
    if (item % 2 == 0) {
    result.push(item);
  }
});
  return result;
}

module.exports = collect_all_even;
