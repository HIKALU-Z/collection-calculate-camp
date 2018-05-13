'use strict';
var rank_desc = function(collection){
  let result = [];
  result = collection.sort(sortDesc);
  console.log(result);
  return result;
};

function sortDesc(a, b) {
  return a - b;
}

module.exports = rank_desc;
