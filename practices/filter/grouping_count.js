'use strict';

function grouping_count(arr) {

  //在这里写入代码
	let result = {};
	arr.forEach(function (val) {
		if (result[val] == undefined) {
			result[val] = 1;
		} else result[val]++;
  })
  return result;
}

module.exports = grouping_count;
