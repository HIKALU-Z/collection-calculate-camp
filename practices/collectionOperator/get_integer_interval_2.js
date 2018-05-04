'use strict';

/**
 * 判断参数是否为数组
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
}

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        result.push(i);
      }
    }
  } else if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 == 0) {
        result.push(i);
      }
    }
  } else {
    if (number_a % 2 == 0) {
      result.push(number_a)
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
