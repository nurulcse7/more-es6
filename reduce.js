// map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters 
const total1 = numbers.reduce((previous, current) => previous + current, 0); // 15
const total2 = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total2);
/*print:
0 1
1 2
3 3
6 4
10 5
15
 */



