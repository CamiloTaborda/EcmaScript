// Flat
const array = [1,1,2,3,4, [6,6,7,8,9,[2,3,4,4,5]]];
console.log(array.flat(3));

// FlatMap
const array2 = [1,2,3,4,5,6];
console.log(array2.flatMap(v => [v, v * 2]));
