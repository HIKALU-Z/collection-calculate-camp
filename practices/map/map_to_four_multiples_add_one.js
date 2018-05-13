'use strict';
var map_to_four_multiples_add_one = function (collection) {
  let result = [];
  result = collection.map(fourMultiplesAddOne)
  return result;
};

function fourMultiplesAddOne(n) {
  return n * 4 + 1;
}

module.exports = map_to_four_multiples_add_one;
