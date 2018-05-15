function count_same_elements(collection) {
  //在这里写入代码
  let n = 0,
    m = 0;
  return collection.reduce((allValue, value, index, array) => {
    if (value.includes("-")) {
      let arr = value.split("-");
      arr_a = arr[0];
      n += arr[1] * 1;
    } else if (value.includes(":")) {
      let arr = value.split(":");
      arr_a = arr[0];
      n += arr[1] * 1;
    } else if (value.includes("[")) {
      let arr = value.split("[");
      arr_a = arr[0];
      let arr_b = arr[1].split("]");
      n += arr_b[0] * 1;
    } else {
      n++;
      arr_a = value;
    }
    if (index == collection.length - 1 || (Array.from(array[index])[0] !== Array.from(array[index + 1])[0])) {
      allValue[m] = {
        name: arr_a,
        summary: n
      };
      n = 0;
      m++;
    }
    return allValue;
  }, []);
}

module.exports = count_same_elements;
