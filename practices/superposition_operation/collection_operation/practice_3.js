'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(value => value % 2 != 0).reduce((previousValue, currentValue) => previousValue + currentValue * 3 + 5, 0)

}

module.exports = hybrid_operation_to_uneven;
