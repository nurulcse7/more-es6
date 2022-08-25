const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
friends.forEach(friend => console.log(friend))
/*print:
Tom Hanks
Tom Cruise
Tom Brady
TOM Solaiman
 */

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
// if u get all name of products
products.forEach(product => console.log(product.name));
/*print:
laptop
mobile
watch
tablet
*/
// if u get all price of products
products.forEach(product => console.log(product.price));
/*print:
45000
80000
35000
23000
*/ // same as id