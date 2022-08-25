// Find --- Those that meet the conditions, the first will be given, the rest will not be given.
// যেগুলো শর্ত অনুযায়ী মিলবে, সেগুলোর প্রথমটা দিবে, বাকি গুলো দিবে না। 

const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// Those that are divisible by 5 and the quotient is 0.
const fives = numbers.find(num => num % 5 === 0) // যে গুলো ৫ দিয়ে ভাগ যায় এবং ভাগশেষ ০ হয়। 
// console.log(fives);// 5 

const fivesAll = numbers.filter(num => num %5 ===0);
// console.log(fivesAll); // [ 5, 45, 55 ] 

const products = [
    {id: 1, name: 'laptop', price: 65000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 23000},
];
// 40000 টাকার নিচে প্রথম প্রোডাক্ট নেওয়ার জন্য
const cheap = products.find(product => product.price < 40000);
console.log(cheap) // { id: 1, name: 'watch', price: 30000 }
 