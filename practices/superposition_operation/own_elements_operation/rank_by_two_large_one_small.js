'use strict';
function rank_by_two_large_one_small(collection){
  // 这里写代码
  let arr = collection.sort((a, b) => a - b);
  arr.forEach((value, index, array) => {
    if ((index+1)%3 == 0){
      [array[index -2], array[index - 1], array[index]] = [array[index - 1], array[index], array[index - 2]];
    }
  })
  return arr;
}
module.exports = rank_by_two_large_one_small;
