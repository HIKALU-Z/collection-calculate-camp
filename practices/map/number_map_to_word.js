'use strict';
var number_map_to_word = function(collection){
  let result = [];
  result = collection.map(convertNumToLetter)
  return result;
};

function convertNumToLetter(num) {
  let result = ''
  result = String.fromCodePoint(num + 96)
  return result;
}

module.exports = number_map_to_word;
