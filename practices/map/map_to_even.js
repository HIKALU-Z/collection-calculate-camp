'use strict';

function map_to_even(collection) {
  let result = [];
  result = collection.map(double)
  return result;
}

function double(n) {
  return n * 2;
}

module.exports = map_to_even;
