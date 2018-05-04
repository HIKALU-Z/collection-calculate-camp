'use strict';
let util = require('./../../util')

function get_union(collection_a, collection_b) {
  //在这里写入代码
  if (!util.isArray(collection_a) || !util.isArray(collection_b)) {
    return
  }
  let result = array_remove_repeat(collection_a.concat(collection_b));
  return result;
}

function array_remove_repeat(a) { // 去重
  var r = [];
  for (var i = 0; i < a.length; i++) {
    var flag = true;
    var temp = a[i];
    for (var j = 0; j < r.length; j++) {
      if (temp === r[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      r.push(temp);
    }
  }
  return r;
}


module.exports = get_union;
