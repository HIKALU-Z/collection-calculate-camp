'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let result = []
  collection_a.forEach(elementA => {
    collection_b.forEach(elementB => {
      if(elementA == elementB){
        result.push(elementB)
      }
    });
  });
  return result;
}

module.exports = choose_common_elements;
