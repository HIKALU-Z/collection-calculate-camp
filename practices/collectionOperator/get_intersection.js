'use strict';
var util = require('./../../util')

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  if(!util.isArray(collection_a)||!util.isArray(collection_b)){
    return
  }
  let result = []
  collection_b.forEach(elementB => {
    collection_a.forEach(elementA =>{
      if(elementB == elementA){
        result.push(elementB)
      }
    })
  });

  return result;
}

module.exports = get_intersection;
