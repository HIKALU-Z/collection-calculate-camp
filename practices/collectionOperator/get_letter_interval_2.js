'use strict';
let util = require('./../../util')

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      result.push(convert(i))
    }
  } else if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(convert(i))
    }
  } else {
    result.push(convert(number_a))
  }
  return result;
}

function convert(num) {
  var result = [];
  while (num) {
    var t = num % 26;
    if (!t) {
      t = 26;
      --num;
    }
    result.push(String.fromCodePoint(t + 96));
    num = ~~(num / 26);
  }
  return result.reverse().join('');
}

module.exports = get_letter_interval_2;
