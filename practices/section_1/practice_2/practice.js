function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(value => collection_b[0].includes(value));
}

module.exports = collect_same_elements;


