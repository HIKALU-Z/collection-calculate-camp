'use strict';

function get_letter_interval(number_a, number_b) {
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

function convert(num){
  return String.fromCodePoint(num+96);
}

module.exports = get_letter_interval;
