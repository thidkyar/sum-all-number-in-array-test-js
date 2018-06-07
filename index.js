function sumItems(array) {
  let sum = 0;
  array.forEach(function(x) {
    if (Array.isArray(x)) {
      sum += sumItems(x)
    } else {
      sum += x
    }
  });
  return sum;
}

module.exports = sumItems;