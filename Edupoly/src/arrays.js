//1. write a script to print all array values in the console.
// let array = [10,20,30];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//2.Forthe Given array: [23,34,54,0,4,7] print all the Array values using a for loop. Expected output: 23 34 54 0 4 7
// let array = [23, 34, 54, 0, 4, 7];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//3. print all numbers in an array except the first element. Expected output: 34 54 0 4 7
// let array = [23, 34, 54, 0, 4, 7];
// for (let i = 1; i < array.length; i++) {
//     console.log(array[i]);
// }
//Solution 2: 
// const array = [23, 34, 54, 0, 4, 7];
// const arrayExceptFirst = array.slice(1);
// for (const value of arrayExceptFirst) {
//     console.log(value);
// }
//4. Print all elements in an array except the last element Expected output: 23 34 54 0 4
// let array = [23, 34, 54, 0, 4, 7];
// for (let i = 0; i < array.length-1; i++) {
//     console.log(array[i]);
// }
//5. Print all the numbers from last index to first index Expected output: 7 4 0 54 34 23
// let array = [23, 34, 54, 0, 4, 7];
// for (i = array.length - 1; i >=0; i--) {
//     console.log(array[i]);
// }
//6.Print all the numbers from last index to first index except the first element Expected output: 4 0 54 34 23
// let array = [23, 34, 54, 0, 4, 7];
// for (i = array.length - 2; i >= 0; i--) {
//     console.log(array[i]);
// }
//7. Print all the numbers from last index to first index except the last element Expected output: 7 4 0 54 34
// let array = [23, 34, 54, 0, 4, 7];
// for (i = array.length - 1; i >= 1; i--) {
//     console.log(array[i]);
// }
//8. Print only the last 4 elements of an array. Expected output: 54 0 4 7
// let array = [23, 34, 54, 0, 4, 7];
// for (i = array.length - 4; i < array.length; i++) {
//     console.log(array[i]);
// }
//solution 2
// const array = [23, 34, 54, 0, 4, 7];
// const lastFourElements = array.slice(-4);
// for (const value of lastFourElements) {
//     console.log(value);
// }
// 9. For the Given array: [23,34,54,10,4,7] print the minimum number in an Array. Expected output: 4
//  const array = [23, 34, 54, 10, 4, 7];
// const minimumNumber = Math.min(...array);
// console.log(minimumNumber);
// let array = [23, 34, 54, 10, 4, 7];
// let minimumNumber = array[0];
// for (let i =1; i < array.length; i++) {
//     if (array[i] < minimumNumber) {
//         minimumNumber = array[i];
//     }
// }
// console.log(minimumNumber);
//10. For the Given array: [23,34,54,10,4,7] print the Maximum number in an array. Expected output: 54
// let array = [23, 34, 54, 10, 4, 7];
// let maximumNumber = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > maximumNumber) {
//         maximumNumber = array[i];
//     }
// }
// console.log(maximumNumber);
//solution 2
// const array = [23, 34, 54, 10, 4, 7];
// const maximumNumber = Math.max(...array);
// console.log(maximumNumber);
//11. For the Given array: [23,34,54,10,4,7] sum of all the numbers in an Array. Expected output: 132
// let array = [23, 34, 54, 10, 4, 7];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];    
// }
// console.log(sum);
//12. For the Given array: [23,34,54,10,4,7] Average of all the numbers in an Array. Expected output: 22
// let array = [23, 34, 54, 10, 4, 7];
// let sum = 0;
// let count = array.length;
// for (let i =0; i < array.length; i++) {
//     sum += array[i];
// }
// let average = sum / count;
// console.log(average);
//13. For the Given array: [23,34,54,10,4,7] print values that are greater than the given number. Given number: 20, Expected output: 23,34,54
// let array = [23, 34, 54, 10, 4, 7];
// let givenNumber = 20;
// for (i = 0; i < array.length; i++) {
//     if (givenNumber < array[i]) {
//         console.log(array[i]);
//     }
// }
//14.For the Given array: [23,34,54,10,4,7] print all the even numbers in an Array. Expected output: 34,54,10,4
// let array = [23, 34, 54, 10, 4, 7];
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 ===0) {
//         console.log(array[i]);
//     }
// }
//15.For the Given array: [23,34,54,10,4,7] print all the odd numbers in an Array. Expected output: 23,7
// let array = [23, 34, 54, 10, 4, 7];
// for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !==0) {
//         console.log(array[i]);
//     }
// }
//16.For the Given array: [23,-34,-54,10,-4,7] print all the positive numbers in an array. Expected output: 23,10,7
// let array = [23, -34, -54, 10, -4, 7];
// console.log(`positve numbers in an array:`);
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         console.log(array[i]);
//     }
// }
//17. For the Given array: [23,34,54,10,4,7] search if the given number is there in an array or not. Given number: 34, Expected output: true Given number: 26, Expected output: false
// let array = [23, 34, 54, 10, 4, 7];
// let givenNumber1 = 34;
// let givenNumber2 = 26;
// let output1 = false;
// let output2 = false;
// for (i = 0; i < array.length; i++) {
//     if (array[i] === givenNumber1) {
//         output1 = true;
//     } 
//     if (array[i] === givenNumber2) {
//         output2 = true;
//     }
// }
// console.log(output1);
// console.log(output2);
// 18.For the Given array: [23,34,54,10,34,7,23,10,34] print the total number of times an element found in the array. Given number: 23, Expected output: 2 Given number: 34, Expected output: 3 Given number: 10, Expected output: 2 Given number: 54, Expected output: 1
// let array = [23,34,54,10,34,7,23,10,34];
// let count23 = 0;
// let count34 = 0;
// let count10 = 0;
// let count54 = 0;
// for (i = 0; i < array.length; i++) {
//     if (array[i] === 23) {
//         count23++;
//     } else  if (array[i] === 34) {
//         count34++;
//     } else if (array[i] === 10) {
//         count10++;
//     } else if (array[i] === 54) {
//         count54++;
//     } 
// }
// console.log(`Give number 23, Expected out ${count23}`);
// console.log(`Give number 34, Expected out ${count34}`);
// console.log(`Give number 10, Expected out ${count10}`);
// console.log(`Give number 54, Expected out ${count54}`);
//19. For the Given array: [23,34,54,10,4,7] print index of a given element in an Array. Given number: 23, Expected output: 0 Given number: 34, Expected output: 1 Given number: 10, Expected output: 3 Given number: 54, Expected output: 2
let array = [23,34,54,10,4,7];




//28. Print only the 2 digit numbers from an array
// let array = [23,34,54,10,4,7];
// for (let i =0; i < array.length; i++) {
//      if (array[i] > 10 && array[i] < 99) {
//         console.log(array[i]);
//      }
// }
// 29.Print only multiples of 5 from an array
// let array = [23,34,54,10,4,7];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 5 === 0) {
//         console.log(array[i]);
//     }
// }
// 30. Print only multiples of 2 AND 3 from an array
// let array = [23,34,54,10,4,7];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && array[i] % 3 ===0) {
//         console.log(array[i]);
//     }
// }
//31. Print only multiples of 3 OR 5 from an array
// let array = [23,34,54,10,4,7,15];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0 && array[i] % 5 ===0) {
//         console.log(array[i]);
//     }
// }
//32. Increment 5% for all the salaries in a given array
// var array = [23,34,54,10,4,7];
// for (var i = 0; i < array.length; i++) {
//     array[]
// }
