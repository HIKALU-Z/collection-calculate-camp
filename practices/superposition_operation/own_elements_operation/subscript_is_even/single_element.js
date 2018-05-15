'use strict';
var single_element = function(collection){
  let allCollections = collection.filter(((value, index) => index%2 == 1));
  let result = [];
  while (allCollections.length != 0){
    let value = allCollections.shift();
    if (allCollections.includes(value)) {
      while (allCollections.includes(value)) {
        allCollections.splice(allCollections.indexOf(value), 1);
      }
    }
    else {
      result.push(value);
    }
    return allCollections;
  }
  return result;
};
module.exports = single_element;
