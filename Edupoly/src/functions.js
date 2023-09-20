// 1.Write a function which can return the sum of two numbers.
//                             function add(a,b){
//                                 …………………
//                             }
//                             var sum = add(45,67);
//                             console.log(sum);
//                             //Expected output: 112
// function add(a, b) {
//     return a + b;
// }
// var sum = add(45, 67);
// console.log(sum);
                        
// 2. Write a function which can return the greatest of the three numbers passed in arguments.
//                             function compare(a,b,c){
//                                 …………………
//                             }
//                             var greatest = compare(45,67,23);
//                             console.log(greatest);//67
// function compare(a,b,c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= c && b >= a) {
//         return b;
//     } else {
//         return c;}
// }
// var greatest = compare(45, 67, 23);
// console.log(greatest);
                        
// 3. Write a function which can print the given arguments in ascending order.
                            
//                             function sortNums(a,b,c){
//                             …………………
//                             }
//                             var ascending = sortNums(45,7,68);
//                             console.log(ascending);//
//  function sortNums(a, b, c) {
//     if (a <= b && a <= c) {
//         if (b <= c) {
//             console.log(a, b, c);
//         } else {
//             console.log(a, c, b);
//         }
//     } else if (b <= a && b <= c) {
//         if (a <= c) {
//             console.log(b, a, c);
//         } else {
//             console.log(b, c, a);
//         }
//     } else if (c <= a && c <= b) {
//         if (a <= b) {
//             console.log(c, a, b);
//         } else {
//             console.log(c, b, a);
//         }
//  }
// }
//  sortNums(45, 7, 68);
 
// 4. Write a function which can return the factorial of a number.
                            
//                             function fact(a){
//                             …………………
//                             }
//                             var factorial = fact(4);
//                             console.log(factorial);
                        // function fact(a) {
                        //     if (a === 0 || a === 1) {
                        //         return 1;
                        //     } else {
                        //         return a * fact(a - 1);
                        //     }
                            
                        // }
                        // var factorial = fact(6);
                        // console.log(factorial);
                        // function fact(a) {
                        //     if (a === 0 || a === 1) {
                        //          return 1;
                        //     } else {
                        //         let factorial = 1;
                        //         for (var i = 2; i <= a; i++) {
                        //              factorial *= i;
                        //         }
                        //         return factorial;
                        //     }
                        // }
                        // var factorial = fact(4);
                        // console.log(factorial);
// 5. Write a function which can to return the reverse of a given number.
//                             function rev(a){
//                             …………………
//                             }
//                             var reverse = rev(4);
//                             console.log(reverse);
// function rev(a) {
//     var reverse = 0;
//     while (a !== 0) {
//         const digit = a % 10;
//         reverse = reverse * 10 + digit;
//         a = (a - digit) / 10;
//     }
//     return reverse;
// }
// var reversed = rev(234);
// console.log(reversed);
// 6. Write a function which can check a given number is prime number or not

// 7. Write a function which can check a given number is palindrome or not
// 8. Write a function to return the number of digits in the given number
// 9. Write a function that prints all even numbers between 1 and 20.
// 10. Write a function which can add two numbers

