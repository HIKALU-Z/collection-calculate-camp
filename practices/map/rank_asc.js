'use strict';
var rank_asc = function (collection) {
  let result = [];
  result = collection.sort(sortAsc);
  console.log(result);
  return result;
};

function sortAsc(a, b) {
  return -(a - b);
}

module.exports = rank_asc;
