function count_same_elements(collection) {
  //在这里写入代码
  let n = 1, m = 0;
  return collection.reduce((allValue, value, index, array) => {
    if (value.includes("-")) {
      let arr = value.split("-");
      allValue[m] = {key: arr[0], count: arr[1]*1};
    }
    else {
      allValue[m] = {key: value, count: n};
      if (array[index] != array[index+1]) {
        n = 0;
        m++;
      }
      n++;
    }
    return allValue;
  },[]);
}

module.exports = count_same_elements;
