//Use Loops to get the output for the following programming questions iteration
// 35. Write a program to print 1 to 10 numbers using a while loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// 36. Write a program to print 10 to 1 numbers using a while loop
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// 37. Write a program to print 5 to 15 numbers using a while loop
// let i = 5;
// while (i <= 15) {
//     console.log(i);
//     i++;
// }
// 38. Write a program to print 15 to 10 numbers using a while loop
// let i = 15;
// while (i >= 10) {
//     console.log(i);
//     i--;
// }
// 39. Write a program to print 1 to 10 even numbers using a while loop
// let i = 1;
// while (i <= 10) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }
// 40. Write a program to print 1 to 10 odd numbers using a while loop
// let i = 1;
// while (i <= 10) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// 41.  Write a program to print first ten multiples of 4 using a while loop (multiples of 4 are 4,8,12,16,20,.....)
// let count = 1;
// let multiple = 4;
// while (count <= 10) {
//     console.log(multiple);
//     multiple += 4;
//     count++;
// }
// 42. Write a program to print multiplication table of 6 using while loop
//  let i = 1;
//  while (i <= 10) {
// let result = 6 * i;
// console.log(`6 * ${i} = ${result}`);
// console.log(6 + ' * ' + i + ' = ' + result);
// i++;
//  }
//43. Print the squares of all numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     const square = i * i;
//     console.log(`The Sqaure of ${i} is ${square}`);
// }
// 44. Print the cubes of all numbers from 1 to 10.
// for (let i =1; i <= 10; i++) {
//     const cube = i * i * i;
//     console.log(`The cube of ${i} is ${cube}`);
// }
// 45. Write a program to print factors of 24 using while loop (factors of 24 are 1,2,3,4,6,8,12,24)
// let i = 1;
// while (i <= 24) {
//     if (24 % i === 0) {
//         console.log(`${i} is a factor of 24`);
//     }
//     i++;
// }
// 46. Write a program to print 1 to 10 numbers using a for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// 47. Write a program to print 10 to 1 numbers using a for loop
// for (let i = 10; i >=1 ; i--) {
//     console.log(i);
// }
// 48. Write a program to print all numbers from 1 to a given number
// let givenNumber = +prompt('Enter the number');
// for (let i = 1; i <= givenNumber; i++) {
//     console.log(i);
// }
// 49. Write a program to print 1 to 10 even numbers using a for loop
// for (i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// 50. Write a program to print 1 to 10 odd numbers using a for loop
// for (i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// 51. Write a program to print first 10 multiples of 3 using a for loop
// for (i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(result);
// }
// 52. Write a program to print multiplication table of 6 using a for loop
// let multiplier = prompt('Enter the number');
// for (i = 1; i <= 10; i++) {
//     let result = multiplier * i;
//     console.log(`${multiplier} * ${i} = ${result}`);
// }
// 53. Write a program to print all the factors of a given number
// let givenNumber = prompt('Enter the number');
// for (i = 1; i <= givenNumber; i++) {
//     if (givenNumber % i === 0) {
//         console.log(`${i} is the factor of a ${givenNumber}`);
//     }
// }
// 54. a program to read 5 numbers and print the maximum and minimum number
// let max = -Infinity;
// let min = Infinity;
// for(i = 1; i <= 5; i++) {
//    let input = +prompt('Enter the number');
//     if (input > max) {
//         max =input;
//     }
//     if (input < min) {
//         min = input;
//     }
// }
// console.log(max);
// console.log(min);
// let maxNumber = Number.MIN_SAFE_INTEGER;
// let minNumber = Number.MAX_SAFE_INTEGER;
// for (let i = 1; i <= 5; i++) {
// let input = +prompt('Enter the number');
// if (input > maxNumber) {
//     maxNumber = input;
// }
// if (input < minNumber) {
//     minNumber = input;
// }
// }
// console.log(maxNumber);
// console.log(minNumber);
// 55.  program to read 5 numbers and print only the even numbers
// for (let i = 1; i <= 5; i++) {
//     let userInput = +prompt('Enter the number');
//     if (userInput % 2 === 0) {
//       console.log(`${userInput} is even number`);
//     }
// }
//Solution 2: using array
// let numbers = [];
// for (let i = 1; i <= 5; i++) {
//     let num = +prompt('Enter the number');
//     numbers.push(num);
// }
// console.log('Even numbers:');
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//     }
// }
