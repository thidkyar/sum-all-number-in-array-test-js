function sumItems(array) {
  let sum = 0;
  array.forEach(function(x) {
    if (Array.isArray(x)) {    
    x.forEach(function(y){
      sum += y
    })
  } else {
    sum += x
  }
  });
  return sum;
}

console.log(sumItems([1, [3, 4], 3, 5]));
