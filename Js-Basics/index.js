// let person = {
//   name: "alireza",
//   age: 20
// };
// for (let key in person) console.log(key, person[key]);
// let number1= 4;
// let number2= 10;
//-----------------------------------------------------------------------
// function maxNumber(a, b) {
//   if (a > b) console.log(a + ' is greater than ' + b);
//   else if (b > a) console.log(b + ' is greater than ' + a);
//   else console.log('both of them is same');
// }
// maxNumber(23, 23);
//-----------------------------------------------------------------------
// let number = max(3, 10);
// console.log(number);
// function max(a, b) {
//   return (a > b) ? a : b;
// }
//-----------------------------------------------------------------------
/** fizzBuzz */
// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== 'number')
//     return 'NaN';

//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (input % 3 === 0)
//     return 'fizz';

//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;
// }
//-----------------------------------------------------------------------
/** Check Speed */
// checkSpeed(166);
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   if (speed < speedLimit + kmPerPoint) {
//     console.log('Ok');
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint)
//   if (points >= 12)
//     console.log('License Suspended');
//   else
//     console.log('Points: ', points);
// }
//-----------------------------------------------------------------------
/**  Even and Odd Numbers */
// showNumbers(10);
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let checkNumber = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, checkNumber);
//   }
// }
//-----------------------------------------------------------------------
/** Count Truthy */
// const array = [NaN, 5, 1, 'alireza', 'p'];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++
//   return count;
// }
//-----------------------------------------------------------------------

/** String Properties */
// const movie = {
//   title: "I'm a Front-End Developer.",
//   releaseYear: 2020,
//   rating: 100,
//   director: 'Alireza Haji Hosseini'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key + ': ', obj[key]);
//   }
// }
//-----------------------------------------------------------------------

/** Sum of Multiples 3 and 5 */
// console.log(sum(10));

// function sum(limit) {
//   let result = 0;

//   for (let i = 3; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) result += i;
//   }
//   return result;
// }
//-----------------------------------------------------------------------
