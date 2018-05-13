'use strict';
var map_to_three_multiples = function(collection){
  let result = [];
  result = collection.map(threeMultiples)
  return result;
};

function threeMultiples(n) {
  return n * 3;
}

module.exports = map_to_three_multiples;
