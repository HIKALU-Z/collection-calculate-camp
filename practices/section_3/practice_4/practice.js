function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let n = 1, m = 0;
  let collection = collection_a.reduce((allValue, value, index, array) => {
    if (value.includes("-")) {
      let arr = value.split("-");
      value = arr[0];
      n = arr[1]*1;
      allValue[m] = {key: value, count: n};
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
  object_b.value.forEach(value => {
    if (collection.map(value_a => value_a.key).includes(value)){
      collection.forEach(value_a => {
        if (value_a.key == value){
          let n = Math.floor(value_a.count/3);
          value_a.count -= n;
        }
      })
    }
  })
  return collection;
}

module.exports = create_updated_collection;
