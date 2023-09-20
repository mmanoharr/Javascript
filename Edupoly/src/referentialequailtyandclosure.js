// 1. using unshift method can you decrease Array length? Justify Answer.
// 2. print the output var array = [1, 2, 3];
// array.push(4, 5);
// console.log(array.length); 
// 3. Print the output var array = [1, 2, 3, 4, 5];
// array.pop();
// console.log(array.length); 
// 4. Print the output var array = [1, 2, 3, 4, 5];
// array.shift();
// array.shift();
// console.log(array.length); 
// 5. Print the output var array = [1, 2, 3, 4, 5];
// array.length = 10;
// console.log(array.length); 
// 6 Print the output 
// var array = [1, 2, 3, 4, 5];
// array.length = 10;
// console.log(array); 
// 7. Print the output
// const array = [1, 2, 3];
// array[5] = "New Element";
// console.log(array); 
// 8. print the output
// var array = [1, 2, 3];
// array[6] = "New Element";
// console.log(array.length); 
// 9. Print the output
// var array = [1, 2, 3, 4, 5];
// array.length = 3;
// console.log(array.length); 
// 10. Print the output
// var array = [];
// for (var i = 4; i <= 6; i++) {
//     array.push(i);
//   }
//   console.log(array.length); 
// 11. print the output
// var array = [1, 2, 3, 4, 5, 6];
// array.splice(3, 3);
// console.log(array.length);
// 12. print the output
// var array = [1, 2, 3];
// array.push(10, 11);
// array[5] = 11;
// console.log(array.length); 
// 13. print the output
// var array = [1, 2, 3, 4];
// array.pop();
// array[3] = undefined;
// console.log(array.length); 
// 14. print the following outputs
// var array = [1, 2, 3, 4, 5];
// console.log(array.length);
// array.length = 0;
// console.log(array.length);
// console.log(array);
// 15.print the following outputs
// var array = [1, 2, 3, 4, 5];
// console.log(array.length);
// array.length = 2;
// console.log(array.length);
// console.log(array);
// 16.print the following outputs
//  var str = "Praveen";
//  console.log(str.length);
//  str.length = 3
//  console.log(str.length);
// 17.Print the follow outputs.
//  var str = "Praveen";
//  str.length = 0;
//  console.log(str.length);
//  console.log(str);
// 18. var str = "Edupoly".
//     str.length = 0;
//   is console.log(str) gives us empty String. justify your answer?
// 19. Is arrays datastructure is mutable or immutable in Javascript? Justify your answer.
// 20. Print the output
// var array = [1, 2, 3, 4, 5];
// delete array[2];
// console.log(array.length);
// 21.print the output
//  var array = ["a", "b", "c", "d"];
//  delete array[2];
//  delete array[0];
//  console.log(array);
// 22. print the output
// var array = [undefined,null,"empty"];
// delete array[0];
// console.log(array);
// 23. print the output
// var array = [undefined,null,"empty"];
// delete array[2];
// console.log(array);
// 24. Print the outputs 
// var ar = [1, 2, 3];
// var br = [];
// delete ar[1];
// console.log(ar);
// for(var i = 0; i < ar.length; i++) {
//     br.push(ar[i]);
// }
// console.log(br);
// 25. Print the outputs 
// var ar = [1, 2, 3];
// var br = [1, 2, 3];
// delete ar[1];
// console.log(ar);
// for(var i = 0; i < ar.length; i++) {
//     br.push(ar[i]);
// }
// console.log(br);
// 26. print the outputs
// var ar = [NaN, null, 0];
// var br = [1, 2, 3];
// delete ar[0];
// console.log(ar);
// for(var i = 0; i < ar.length; i++) {
//     br.push(ar[i]);
// }
// console.log(br);
// console.log(br.length);
// 27. print the outputs
// var ar = [1, 2, 3];
// var br = [1, 2, 3, 4];
// delete ar[0];
// console.log(ar);
// for(var i = 0; i < ar.length; i++) {
//     br.pop();
// }
// console.log(br);
// 28. print the outputs
// var ar = [1, 2, 3];
// var br = [1, 2, 3];
// delete ar[1];
// console.log(ar.length);
// for(var i = 0; i < ar.length; i++) {
//     br.pop(ar[i]);
// }
// console.log(br.length);
// 29. print the outputs
// var ar = [1];
// var br = [1, 2, 3];
// delete ar[1];
// console.log(ar);
// for(var i = 0; i < ar.length; i++) {
//     br.pop(ar[i]);
// }
// console.log(br);
// 30. print the output
// var ar = [1];
// var br = [1];
// delete ar[1];
// console.log(ar.length);
// for(var i = 0; i < ar.length; i++) {
//     br.pop(ar[i]);
// }
// console.log(br.length);
// 31. print the output
// var ar = [0];
// var br = [0];
// delete ar[0];
// console.log(ar.length);
// for(var i = 0; i < ar.length; i++) {
//     br.shift();
// }
// console.log(br.length);
// 32. Print the output.
// var ar = [0];
// var br = [0];
// delete ar[0];

// for(var i = 0; i < ar.length; i++) {
//     br.shift();
// }
// console.log(br);
// console.log(ar);
// 33. Print the output
// var ar = [0];
// var br = [0];
// delete ar[0];

// for(var i = 0; i < ar.length; i++) {
//     br.shift();
//     ar.pop();
// }
// console.log(br);
// console.log(ar);
// 34. print the output
// var ar = [undefined];
// var br = [undefined];
// delete ar[undefined];

// for(var i = 0; i < ar.length; i++) {
    
// }
// console.log(br);
// console.log(ar);
// 35. print the output
// var ar = [1];
// var br = [2];
// delete ar[3];

// for(var i = 0; i < ar.length; i++) {
//   console.log('Best coaching center Edupoly');
// }

// console.log(br);
// console.log(ar);
// 36. In the given  below arrays
// var arr = [1];
// var brr = [1];
// Does arr and brr have same reference address or different address? Justify your answer.
// 37. In the given  below arrays
// var arr = [1, 2, 3];
// var brr = [1, 2, 3];
// Does arr and brr have same reference address or different address? Justify your answer.
// 38. Print the output.
// var arr = [1];
// var brr = arr;
// console.log(arr === brr);
// 39. Print the output.
// var arr = [1];
// var brr = arr;
// console.log(arr == brr);
// 40. Print the output.
// var arr = [1];
// var brr = [1];
// console.log(arr == brr);
// 41. Print the output.
// var arr = [1];
// var brr = [1];
// console.log(arr === brr);
// 42 Print the output
// var arr = [1];
// var brr = [1];
// arr.push(2);
// console.log(arr);
// console.log(brr);
// console.log(arr == brr);
// console.log(arr === brr);
// 43.Print the output
// var arr = [1];
// var brr = arr;
// arr.push(20);
// console.log(arr);
// console.log(brr);
// console.log(arr == brr);
// console.log(arr === brr);
// 44.Print the output
// var arr = [1];
// var brr = arr;
// arr.unshift(20);
// console.log(arr);
// console.log(brr);
// console.log(arr == brr);
// console.log(arr === brr);
// 45.For Given code below, is brr a duplicate array or not. Justify your answer?
// var arr = [1];
// var brr = arr;
// arr.unshift(20);
// 46.For Given code below, is arr a duplicate array or not. Justify your answer?
// var arr = [1];
// var brr = arr;
// arr.unshift(20);
// 47. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.concat([]);
// console.log(brr);
// 48. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.concat(arr);
// console.log(brr);
// 49. print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.concat([12, 13, 7, 3]);
// console.log(brr);
// 50. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.concat([]);
// console.log(arr == brr);
// 51. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.concat([]);
// console.log(arr === brr);
// 52. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.map(function (a) {return a});
// console.log(brr);
// 53. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.map(function (a) {return a});
// console.log(arr === brr);
// 54. Print the output
// var arr = [12, 13, 7, 3];
// var brr = arr.map(function (a) {return a});
// arr = brr;
// console.log(arr === brr);
// 55. what is Referential Equality. What do you understand Referential Equality means. Explain
// 56. Print the output
//    var ob1 = {academy: "Edupoly"};
//    var ob2 = {academy: "Edupoly"};
//    console.log(ob1 === ob2);
// 57. Print the output
// var ob1 = {academy: "Edupoly"};
// var ob2 = {academy: "Edupoly"};
// console.log(ob1 == ob2);
// 58. Print the output
// var str1 = "Hello Edupoly";
// var str2 = "Hello Edupoly";
// console.log(str1 === str2);
// 59. print the output
// var str1 = "Hello Edupoly";
// var str2 = "Hello Edupoly";
// console.log(str1 == str2);
// 60. Print the output
// var num1 = 121;
// var num2 = 121;
// console.log(num1 === num2);
// 61. Print the output
// var num1 = 121;
// var num2 = 121;
// console.log(num1 == num2);
// 62. Print the output
// var num1 = 121;
// var num2 = num1;
// console.log(num1 === num2);
// 63. Print the output
// var num1 = 121;
// var num2 = num1;
// console.log(num1 == num2);
// 64. Print the output
// var str1 = "Hello Edupoly";
// var str2 = str1;
// console.log(str1 === str2);
// 65. print the output
// var str1 = "Hello Edupoly";
// var str2 = str1;
// console.log(str1 == str2);
// 66. Print the output
// var num1 = 121;
// var num2 = "121";
// console.log(num1 === num2);
// 67. Print the output
// var num1 = 121;
// var num2 = "121";
// console.log(num1 == num2);
// 68. Print the output
//    var ob1 = {academy: "Edupoly"};
//    var ob2 = ob1;
//    console.log(ob1 === ob2);
// 69. Print the output
// var ob1 = {academy: "Edupoly"};
// var ob2 = ob1;
// console.log(ob1 == ob2);
// 70. print the output
//  function edupoly() {
// console.log("Hello Edupoly");
//  }
//  function academy() {
//     console.log("Hello Edupoly");
//  }
//  console.log(edupoly === academy);
// 71. Print the output
//  function edupoly() {
//     console.log("Hello Edupoly");
//      }
//      function academy() {
//         console.log("Hello Edupoly");
//      }
//      console.log(edupoly == academy);
// 72. print the output
//  function edupoly() {
// console.log("Hello Edupoly");
//  }
//  function academy() {
//     console.log("Hello Edupoly");
//  }
//  edupoly = academy;
//  console.log(edupoly === academy);
// 73. Print the output
//  function edupoly() {
//     console.log("Hello Edupoly");
//      }
//      function academy() {
//         console.log("Hello Edupoly");
//      }
//      console.log(edupoly == academy);
// 74. print the output
// var edupoly = function() {
// console.log("Hello Edupoly");
//  }
//  var academy =function() {
//     console.log("Hello Edupoly");
//  }
//  console.log(edupoly === academy);
// 75. Print the output
//  var edupoly = function() {
//     console.log("Hello Edupoly");
//      }
//   var academy = function() {
//         console.log("Hello Edupoly");
//      }
//      console.log(edupoly == academy);
// 76. print the output
// var edupoly = function() {
// console.log("Hello Edupoly");
//  }
//  var academy = function() {
//     console.log("Hello Edupoly");
//  }
//  edupoly = academy;
//  console.log(edupoly === academy);
// 77. Print the output
//  var edupoly = function() {
//     console.log("Hello Edupoly");
//      }
//    var academy =  function() {
//         console.log("Hello Edupoly");
//      }
//      console.log(edupoly == academy);
// 78. print the output
// var edupoly = function() {
//     console.log("Hello Edupoly");
//      }
//      var academy = edupoly;
//      console.log(edupoly === academy);
// 79. Print the output
//      var edupoly = function() {
//         console.log("Hello Edupoly");
//          }
//       var academy = edupoly;
//          console.log(edupoly == academy);
// 80. what is shallow copy. Explain with a small example.
// 81. what is deep copy. Explain with a small example.
// 82. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// console.log(brr);
// 83.Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.map(function (a) { return a});
// console.log(brr);//82. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// console.log(brr);
// 83.Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.map(function (a) { return a});
// console.log(brr);
// 84. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[0] = 10;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// 85.Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[3] = 10;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// 86.Print the output
// var arr = [1,2,3,[4,5],6];
// arr[3] = 10;
// var brr = arr.concat([]);
// var crr = arr;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// 87.Print the output
// var arr = [1,2,3,[4,5],6];
// arr[3][0] = 10;
// var brr = arr.concat([]);
// var crr = arr;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// 88. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[3][0] = 10;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// console.log(arr === crr);
// 89. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[3][0] = 10;
// arr[3][1] = 13;
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// console.log(arr === crr);
// 90. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[3][0] = "Praveen";
// arr[3][1] = "Gubbala";
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// console.log(arr === crr);
// 91. Print the output
// var arr = [1,2,3,[4,5],6];
// var brr = arr.concat([]);
// var crr = arr;
// arr[3] = "Edupoly";
// console.log(brr);
// console.log(crr);
// console.log(arr === brr);
// console.log(arr === crr);
// 92. what is the return type of arr.map() method?
// 93.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// var brr = JSON.stringify(arr);
// console.log(arr);
// console.log(brr);
// 94.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// var brr = JSON.parse(JSON.stringify(arr));
// console.log(arr);
// console.log(brr);
// 95.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// var brr = JSON.parse(JSON.stringify(arr));
// arr[3][1] = 12;
// console.log(arr);
// console.log(brr);
// 96.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// arr[3][1] = 12;
// var brr = JSON.parse(JSON.stringify(arr));
// console.log(arr);
// console.log(brr);
// 97.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// var brr = JSON.parse(JSON.stringify(arr));
// arr[3][0] = 12;
// console.log(arr);
// console.log(brr);
// 98.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// arr[3][0] = 12;
// var brr = JSON.parse(JSON.stringify(arr));
// console.log(arr);
// console.log(brr);
// 99.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// arr[3][0] = "Edupoly";
// var brr = JSON.parse(JSON.stringify(arr));
// console.log(arr);
// console.log(brr);
// 100.Print the output. Also mention data types of arr and brr?
// var arr = [1,2,3,[4,5],6];
// var brr = JSON.parse(JSON.stringify(arr));
// arr[3][0] = "Edupoly";
// console.log(arr);
// console.log(brr);
