// Filter ---Those who meet the conditions will give all. 
//যেগুলো শর্ত অনুযায়ী মিলবে, সেগুলো সব দিবে। 
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNum = numbers.filter(number => number > 20); // greater than 20 of an array
console.log(bigNum) // [ 23, 45, 55, 61 ] 
const tiny = numbers.filter(n => n < 10); // less than 10 of an array 
console.log(tiny) // [ 5, 9, 1 ] 
const even = numbers.filter( num => num % 2 === 0); // even number of an array
console.log(even); // [ 12, 18 ]
const odd = numbers.filter( num => num % 2 === 1); // odd number of an array
console.log(odd); // [ 5, 23, 45, 11, 9, 55, 61, 1 ]
// N.B You can write number = n = num

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
// const expensive = products.filter(product => product.price > 100000); // [] //empty array
// const expensive = products.filter(product => product.price > 100);  // full array
// const expensive = products.filter(product => product.price < 100); // [] //empty array
const expensive = products.filter(product => product.price < 45000); 
console.log(expensive);
/*print:
 [
  { id: 1, name: 'watch', price: 35000 },
  { id: 1, name: 'tablet', price: 23000 }
]
 */