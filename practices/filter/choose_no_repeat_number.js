'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let result = []
  for (let i = 0; i < collection.length; i++) {
    let flag = true;
    let item = collection[i]
    for (let j = 0; j < result.length; j++) {
      if (item === result[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(item)
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
