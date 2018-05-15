'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let result;
  let arr = collection.split('->');
  arr = arr.map(item => {
    return parseInt(item)
  })
  arr = arr.sort((arr1, arr2) => {
    return arr1 - arr2
  })
  if (arr.length % 2 == 0) {
    result = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
  } else {
    result = arr[(arr.length - 1) / 2]
  }
  return result;
}

module.exports = compute_chain_median;
