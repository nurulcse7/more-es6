/* ---------------Practice Problem map(), filter(), find()------------ */
/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. 
Now convert this array into an even array (array with even  numbers). [ 2, 4, 6, 8, 10 ]. 
Do this using for loop & array.map() method. 
Hints: add one to any odd number and it will become an even number.  */
// for loop ==========  
const numbers = [ 1, 3, 5, 7, 9 ]
const newArray = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    console.log(element)
    newArray.push(element + 1)
}
console.log(newArray)
//print: [ 2, 4, 6, 8, 10 ]

// array.map() =========
const numbers1 = [1, 3, 5, 7, 9];
const even = numbers1.map( n => n+1 )
console.log(even); // [ 2, 4, 6, 8, 10 ]


/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. 
Now return/get all the elements that are divisible by 10 using an array.filter() method. */
const numbers2 = [33, 50, 79, 78, 90, 101, 30 ];
const divisible = numbers2.filter( num => num % 10 === 0); 
console.log(divisible) // [ 50, 90, 30 ]


/* 3) Now do the same task as question 2. But do this using array.find() method. 
Then compare the output of questions 2 & question 3 */
const numbers3 = [33, 50, 79, 78, 90, 101, 30 ];
const divisible1 = numbers3.find( num => num % 10 === 0); 
console.log(divisible1) // 50


/*--------------- Practice Problem reduce() ------------*/
/*1) You have an array [ 1, 9, 17, 22 ]. 
Add all elements of this array and give output. 
Do this using for loop &  array.reduce() method.  */
// ======for loop method =========
function getSumOfAnArray(numbers3) {
    let sum = 0;
    for (let i = 0; i < numbers3.length; i++) {
        const index = i;
        const element = numbers3[index];
        sum = sum + element;
        // console.log(sum);
    }
    return sum;
}
const myNumbers = [1, 9, 17, 22];
const sumOfArray = getSumOfAnArray(myNumbers);
console.log(sumOfArray) // 49
// ======= array.reduce() method =========
const numbers4 = [1, 9, 17, 22 ];
const total1 = numbers4.reduce( (previous, current) => previous + current , 0);
console.log(total1); // 49 


/* 2 */
const people =[
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];
/*Challenging Follow above array of objects. So, you have 3 objects as  array element. 
Can you find out the total sum from here?  
20 + 15 + 22 = 57 . The output will be 57 
What are you thinking? Yeah! Do it with for loop. I know you can do it.  
But! Wait !! Wait !!! Do the same task using array.reduce() method.  
*/ 
//====== for loop  method. ========
function totalAge(females){
    let sum = 0;
    for(let i = 0; i < females.length; i++){
        const female = females[i];
        sum = sum + female.age;
        // console.log(female) // full array of people
    }
    return sum;
}
const totalAdulthood = totalAge(people);
console.log(totalAdulthood) //57
// ========== array.reduce() method. ==========
const totalAge2 = people.reduce((sum, obj) => sum + obj.age, 0);
console.log(totalAge2)


/*-------------------Practice Problem: Access Object values---------------------------- */
/* 01. Console the value of age*/
const student = {
    name: 'Fredie',
    age: 26
}
// Answer
const valueOfAge = student?.age;
console.log(valueOfAge); //26 


/* 02. Console the value of City */
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7', 
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};
const valueOfCity1 = data.location.map(town => town.city );
console.log(valueOfCity1); // [ 'Hyderabad' ]
// // others way
const cityName = data.location[0].city
console.log(cityName) // Hyderabad

/* 03. 
*** Console the value of email
*** Console the value of address
*** Console the value of city
*** Console the value of lat
*** Console the value of company name
 */
const user = {
    id: 1,
    name: 'Nurul Islam',
    username: 'nurul',
    email: 'sincere@april.biz',
    address: {
        street: 'Ranking street',
        suite: 'Apt. 556',
        city: 'Washington DC',
        zipCode: '99301',
        geo: {
            lat: '37.3159',
            lng: '81.1496'
        }
    },
    phone: '+880-160191577',
    website: 'https://portfolio-frontend-83a97.web.app/',
    company: {
        name: 'Google',
        catchPhrase: "Don't be evil",
        bs: 'harness real-time e-markets'
    }
}
const valueOfEmail = user.email;
console.log(valueOfEmail); // sincere@april.biz

const valueOfAddress = user.address;
console.log(valueOfAddress);
/*print:
{
  street: 'Ranking street',
  suite: 'Apt. 556',
  city: 'Washington DC',
  zipCode: '99301',
  geo: { lat: '37.3159', lng: '81.1496' }
}
*/
const valueOfCity = user.address.city;
console.log(valueOfCity) // Washington DC

const valueOfLat = user.address.geo.lat;
console.log(valueOfLat); // 37.3159 

const companyName = user.company.name;
console.log(companyName); // Google 

