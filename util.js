
/**
 * 判断参数是否为数组
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
}

function removeRepateElement(a) { // 去重
  var r = [];
  if(isArray(a) == false){
    return
  }
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

module.exports={
  isArray,
  removeRepateElement
}
