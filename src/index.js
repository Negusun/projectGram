var nums = [123, 35445, 67, 34, 2235, 23, 2];

//el javascript de siempre
var numsMas1 = nums.map(function (numero){
  return numero + 1;
});

//ECMAScript6
var numsMas1 = nums.map(n => n+1);

console.log(numsMas1);
