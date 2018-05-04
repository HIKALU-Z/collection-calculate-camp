"use strict";

/**
 * 判断参数是否为数组
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
}

function collect_last_element(collection) {
  if (!isArray(collection)) {
    return;
  }
  //在这里写入代码
  let result = collection[collection.length - 1];
  return result;
}

module.exports = collect_last_element;
