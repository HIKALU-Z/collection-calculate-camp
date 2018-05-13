'use strict';
let util = require('../../util')

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  collection.forEach(element => {
    if (util.isArray(element)) {
      element.forEach(ele => {
        result.push(ele)
      })
    } else {
      result.push(element)
    }
  });
  return result;
}

module.exports = double_to_one;
