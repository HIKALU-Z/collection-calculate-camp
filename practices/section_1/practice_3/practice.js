function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(value => object_b.value.includes(value))
}

module.exports = collect_same_elements;
