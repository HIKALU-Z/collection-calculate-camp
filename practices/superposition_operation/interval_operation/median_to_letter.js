'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let num = collection[collection.length/2];
  return String.fromCharCode(num/26 + 96) + String.fromCharCode(num%26 + 96);
}

module.exports = median_to_letter;
