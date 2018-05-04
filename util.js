
/**
 * 判断参数是否为数组
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
}
module.exports={
  isArray
}
