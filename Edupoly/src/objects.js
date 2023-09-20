/* 69.Given an object:
var person = {
    "firstName" : "Harry",
    "lastName" : "Potter",
    "age": 30,
    "gender": "male",
    "skill" : "ReactJS",
    "expertise": "Beginner"
};

Print the firstname.
Print the lastname.
Print the fullname("Harry Potter").
If the age is less than 18, then print "false". If the age is more than 18, then print "true".*/
// var person = {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     age: 30,
//     gender: 'male',
//     skill: 'react js',
//     expertise: 'beginner'
// }
// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(`"${person['firstName']} ${person['lastName']}"`); //is this syntax correct
//console.log(person['firstName'] + ' ' + person['lastName']); // how to keep in double quotes
// if (person['age'] < 18) {
//     console.log(false);
// } else console.log(true);
/* 70. For the given marks object solve the following
                            var marks = {
                                "maths" : 34,
                                "english" : 56,
                                "science": 32,
                                "hindi" : 75,
                                "social science": 65
                            };
                        
Print the marks of all the subjects.
Print the names of all the subjects from the given object.
Count the number of subjects from the given object.
Print the percentage of the marks of the student.
Print only those subjects where the student scored more than 35.
Print the pass/fail status of the subjects provided 35 is the pass mark.
Print only the passed subjects.
Count the number of passed subjects.
Print only the failed subjects.
Count the number of failed subjects.
Print the least scored subject.
Print the highest scored subject.
Check whether the student has passed in all the subjects or not.
Take the subject name from the student through prompt box and print the subject marks and pass/fail status. */
// var marks = {
//     maths: 34,
//     english: 56,
//     science: 32,
//     hindi: 75,
//     socialScience: 65
// }
// for (var key in marks) {
//     console.log(marks[key]);
// }
// for (var key in marks) {
//     console.log(key);
// }
// var count = 0;
// for (var key in marks) {
// count++;
// }
// console.log(count);
// var sum = 0;
// var totalMarks = 500;
// var percentage;
// for (var key in marks) {
//     sum += marks[key];
// }
// percentage = (sum / totalMarks) * 100;
// console.log(parseInt(percentage));
// Print only those subjects where the student scored more than 35.
// var minimumMarks = 35;
// for (var key in marks) {
//    if (marks[key] > minimumMarks) {
//     console.log(marks[key]);
//    }
// }
// Print the pass/fail status of the subjects provided 35 is the pass mark.
// var cutOffMarks = 35;
// for (var key in marks) {
//     if (marks[key] >= cutOffMarks) {
//         console.log(`${key} subject status is pass with mark achieved ${marks[key]} `);
//     } else console.log(`${key} subject status is fail with marks ${marks[key]} `);
// }
/*Print only the passed subjects.
Count the number of passed subjects.*/

// var cutOffMarks = 35;
// var passedCount = 0;
// for (var key in marks) {
//     if (marks[key] >= cutOffMarks) {
//      console.log(key);
//      passedCount++;
//     }
// }
// console.log(passedCount);
/*Print only the failed subjects.
Count the number of failed subjects.*/
// var cutOffMarks = 35;
// var failedCount = 0;
// for (var key in marks) {
//     if (marks[key] <     cutOffMarks) {
//      console.log(key);
//      failedCount++;
//     }
// }
// console.log(failedCount);
//Print the least scored subject.
// var leastScored = Number.MAX_SAFE_INTEGER;
// var leastScoredSubject = '';
// for (var key in marks) {
//     if (marks[key] < leastScored) {
//         leastScored = marks[key];
//         leastScoredSubject = key;
//     }
// } 
// console.log(leastScoredSubject);
//Print the highest scored subject.
// var highestScore = 0;
// var highestScoredSubject = '';
// for (var key in marks) {
//     if (marks[key] > highestScore) {
//         highestScore = marks[key];
//         highestScoredSubject = key;
//     }
// }
// console.log(highestScoredSubject);
/*For the given Object Solve the following
var products = [
    {
        "name": "Duracell - AAA Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.49,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Hard Rock TrackPak - Mac",
        "type": "Software",
        "price": 29.99,
        "category": "Recording Equipment",
        "manufacturer": "Hal Leonard",				
    },
    {
        "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.62,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Energizer - MAX Batteries AA (4-Pack)",
        "type": "HardGood",
        "price": 5.32,
        "category": "Household Batteries",
        "manufacturer": "Energizer",				
    },
    {
        "name": "METRA - Antenna Cable Adapter - Black",
        "type": "HardGood",
        "price": 13.99,
        "category": "Antennas & Adapters",
        "manufacturer": "Metra",				
    },
    {
        "name": "WipeDrive Six - Mac|Windows",
        "type": "Software",
        "price": 23.99,
        "category": "Maintenance Software",
        "manufacturer": "White Canyon",				
    }
];

Print all the product names.
Print all the hardgoods.
Print all the softwares.
Print all the categories.
Print only the products manufactured by Duracell.
Print the product names in ascending order of their prices.
Print only those products whose price is more than 14.99.
Print only those products whose price is less than 9.99.
Print the total price of all the hardgoods.
Print the average price of the softwares.*/
var products = [
    {
        "name": "Duracell - AAA Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.49,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Hard Rock TrackPak - Mac",
        "type": "Software",
        "price": 29.99,
        "category": "Recording Equipment",
        "manufacturer": "Hal Leonard",				
    },
    {
        "name": "Duracell - AA 1.5V CopperTop Batteries (4-Pack)",
        "type": "HardGood",
        "price": 5.62,
        "category": "Household Batteries",
        "manufacturer": "Duracell",				
    },
    {
        "name": "Energizer - MAX Batteries AA (4-Pack)",
        "type": "HardGood",
        "price": 5.32,
        "category": "Household Batteries",
        "manufacturer": "Energizer",				
    },
    {
        "name": "METRA - Antenna Cable Adapter - Black",
        "type": "HardGood",
        "price": 13.99,
        "category": "Antennas & Adapters",
        "manufacturer": "Metra",				
    },
    {
        "name": "WipeDrive Six - Mac|Windows",
        "type": "Software",
        "price": 23.99,
        "category": "Maintenance Software",
        "manufacturer": "White Canyon",				
    }
];
// for (var i = 0; i < products.length; i++) {
//      console.log(products[i]['name']);
// }
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['type'] === 'HardGood') {
//         console.log(products[i]['name']);
//     }
// }
//Print all the softwares.
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['type'] === 'Software') {
//         console.log(products[i]['name']);
//     }
// }
//Print all the categories.
// for (var i = 0; i < products.length; i++) {
//     console.log(products[i]['category']);
// }
//Print only the products manufactured by Duracell.
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['manufacturer'] === 'Duracell') {
//         console.log(products[i]['name']);
//     }
// }
//Print the product names in ascending order of their prices.
// Bubble sort algorithm to sort products by price in ascending order
for (var i = 0; i < products.length - 1; i++) {
    for (var j = 0; j < products.length - i - 1; j++) {
        if (products[j].price > products[j + 1].price) {
            // Swap products[j] and products[j + 1]
            var temp = products[j];
            products[j] = products[j + 1];
            products[j + 1] = temp;
        }
    }
}
console.log(products);
for (var i = 0; i < products.length; i++) {
    console.log(products[i]['name']);
}
//Print only those products whose price is more than 14.99.
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['price'] > 14.99) {
//         console.log(products[i]['name']);
//     }
// }
//Print only those products whose price is less than 9.99.
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['price'] < 9.99) {
//         console.log(products[i]['name']);
//     }
// }
//Print the total price of all the hardgoods.
// var totalPrice = 0;
// for (i = 0; i < products.length; i++) {
//     if (products[i]['type'] === 'HardGood') {
//         totalPrice += products[i]['price'];
//     }
// }
// console.log(totalPrice);
//Print the average price of the softwares.
// var totalPrice = 0;
// var count = 0;
// for (var i = 0; i < products.length; i++) {
//     if (products[i]['type'] === 'Software') {
//         totalPrice += products[i]['price'];
//         count++;
//     }
// }
// var averagePrice = totalPrice / count;
// console.log(averagePrice);
/* 72.var people = [
    {
        "firstname": "praveen",
        "lastname": "gubbala",
        "age": 36,
        "gender": "male",
        "city": "hyd",
        "salary": 10000
        },
        {
        "firstname": "srikanth",
        "lastname": "gubbala",
        "age": 32,
        "gender": "male",
        "city": "bengaluru",
        "salary": 20000
        },
        {
        "firstname": "pradeep",
        "lastname": "reddy",
        "age": 21,
        "gender": "male",
        "city": "hyd",
        "salary": 25000
        },
        {
        "firstname": "mounika",
        "lastname": "mudiraj",
        "age": 20,
        "gender": "female",
        "city": "nalgonda",
        "salary": 30000
        },
        {
        "firstname": "nikhil",
        "lastname": "m",
        "age": 22,
        "gender": "male",
        "city": "guntur",
        "salary": 2000
        },
        {
        "firstname": "riya",
        "lastname": "bhadouria",
        "age": 14,
        "gender": "female",
        "city": "indore",
        "salary": 40000
        }
        ];
Print all the firstnames.
Print all the full names.
Print only those names whose age is more than 25.
Print all female names.
Print only those names whose salary is more than 25000 and increase their salaries by 15%.
Using prompt, print only those names whose city is "hyd".
Print the total salary of all the people.
Print all the female names.
Print all the firstnames whose salary is more than 25000.
Using prompt, print all names whose city is "hyd".
Print all the fullnames in the alphabetical order.
Print all the fullnames in the increasing order of their age.
Print all the fullnames in the reverse alphabetical order.
Print all the fullnames in the decreasing order of their salaries.
Print all the cities in which the people live. There should not be any duplicate cities.
Print all the male names whose age is greater than 25.
Print all names that starts with "p" and the firstname should be in UPPERCASE. e.g. PRAVEEN gubbala.*/
// var people = [
//     {
//         "firstname": "praveen",
//         "lastname": "gubbala",
//         "age": 36,
//         "gender": "male",
//         "city": "hyd",
//         "salary": 10000
//         },
//         {
//         "firstname": "srikanth",
//         "lastname": "gubbala",
//         "age": 32,
//         "gender": "male",
//         "city": "bengaluru",
//         "salary": 20000
//         },
//         {
//         "firstname": "pradeep",
//         "lastname": "reddy",
//         "age": 21,
//         "gender": "male",
//         "city": "hyd",
//         "salary": 25000
//         },
//         {
//         "firstname": "mounika",
//         "lastname": "mudiraj",
//         "age": 20,
//         "gender": "female",
//         "city": "nalgonda",
//         "salary": 30000
//         },
//         {
//         "firstname": "nikhil",
//         "lastname": "m",
//         "age": 22,
//         "gender": "male",
//         "city": "guntur",
//         "salary": 2000
//         },
//         {
//         "firstname": "riya",
//         "lastname": "bhadouria",
//         "age": 14,
//         "gender": "female",
//         "city": "indore",
//         "salary": 40000
//         }
//         ];
// Print all the firstnames & fullname
// for (var i = 0; i < people.length; i++) {
//     console.log(people[i]['firstname']);
//     console.log(people[i]['firstname'] + ' ' + people[i]['lastname']);
// }
//Print only those names whose age is more than 25.
// for (var i = 0; i < people.length; i++) {
//     if (people[i]['age'] > 25) {
//         console.log(people[i]['firstname'] + ' ' + people[i]['lastname']);
//     }
// }
//Print all female names.
// for (var i = 0; i < people.length; i++) {
//     if (people[i]['gender'] === 'female') {
//         console.log(people[i]['firstname'] + ' ' + people[i]['lastname']);
        
//     }
// }
//Print only those names whose salary is more than 25000 and increase their salaries by 15%.
// var person = {
//     firstName: 'Manohar',
//     lastName: 'Metta',
//     age: 30,
//     gender: 'Male',
//     place: 'Hyderabad'
// }
// var a = 'firstName';
// console.log(person.a);
// console.log(person['first' +'Name']);
