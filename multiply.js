var multiply = function(x,y){
  var result = [];
  var multiplier, pattern, value, product;
  var n = x.length > y.length ? y.length : x.length;
  for (var i = 0;i<x.length;i++){
    pattern = y[i%n];
    product = x[i]*pattern;
    result.push(product);
  }
  return result;
}
