function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b.value.forEach(value => {
    if (collection_a.map(value_a => value_a.key).includes(value)) {
      collection_a.forEach(value_a => {
        if (value_a.key == value) {
          value_a.count--;
        }
      })
    }
  })
  return collection_a;
}

module.exports = create_updated_collection;
