// 1. What is the Difference Between =, ==, and === in JavaScript 
//= assigns value, == compares value ignoring data type and === compares value and data type


// 2. What are template literals in js?
//multi-line string called using backticks (``)


// 3. What are the differences between variables created using let, var or const?
// var is not limited to the block of code in which it was declared whereas let and const are limited.
//const variables cannot be redeclared or updated once declared but let and var variables can be updated or redeclared


// 4. What are data types in javascript?
//numbers, strings, booleans, operators, arrays, objects


// 5. What is difference between null vs undefined?
// null is an intentional absence of a value whereas undefined is an unknown value


// 6. What are various operators supported by javascript?
// +,-,=,<,>


// 7. What is 'typeof' operator?
// Operator that returns the data type of the data it is applied to.


//8. what are some of the important features of JavaScript ES6
// let and const functions, default values, arrow functions


//9. how does the ternary operator in javascript work?
// the same as an if else statement but different syntax



//10. what are valid variable names in js
// no spaces, only letters, numbers, underscores



//11. what is variable scope?
// the range in which the value of the variable will persist

//11. what is variable assignment?
//when you assign a value to a variable



// NUMBERS

// 1. How do you generate random integers in js?
Math.random()


// 2. What is isNaN?
// is Not a Number
6.isNaN == false
'six'.isNaN == true


// 3. How to do you see if a number is even?
// (even number)%2 == 0 returns true
// (odd number)%2 == 0 returns false


// 4. how do you convert the string '1' to the number 1
Number('1')


// STRINGS



//1. Explain these methods

// startsWith()
// determines if a string starts with a declared string
// (like if 'banana' starts with 'b" or if 'firetruck' starts with 'fire')


// endsWith()
// see startsWith() but the ending of the string


// includes()
// same as startsWith() but checks whole string



// slice()
/* extracts part of a string and returns it as a new string. first character in string is position 0.
use (x,y) to declare start and finish of slice where x is the first character (slice includes first character)
and y is last character (character on position of y is not included)*/


// toUpperCase()
//capitalizes a string


// toLowerCase()
//decapitalizes a string


// charAt()
// returns the character at the position in the argument


// split()
//splits the string and returns an array of the split string


// replace()



CONDTIONALS




//1. how does the if statement work in js
// checks to see if a statement is true and if it is performs an action


//2. how does the if/else statement work in js
// checks to see if a statement is true and if it is performs an action but if it is not performs a different action

//3. how does the if/elseif/else statement work in js
// checks to see if statement is true and if it is true performs an action. if it is not true it checks a second possibility
//and performs an action if it is true. if neither is true it performs a third action.


//4. what is a switch statement


//5. how is a switch statement different from if/elseif statement


//6. what are the Comparison Operators that js uses?


//7. what are the Logical Operators that js uses?


//8. what are truthy and falsey values (more high level idea)


//9. what are the specific falsey values in js


//10. what are the specific truthy values in js(answer: anything that is not falsey)


//11. how does a nested if statement in js work



LOOPS




//1. what is for loop in javascript


//1a. what is the syntax for a for loop in javascript


//2. what is while loop in javascript


//2a. what is the syntax for a while loop in javascript


//3. what is while for...in in javascript


//3a. what is the syntax for a while for...in in javascript


//4. what is nested loop, give an example?





FUNCTIONS



//1. how do you define a function in javascript
function test(){
    //functino content here//
}
 //- how do define an arrow function

 //- how do you define a regular function

 //- what is the difference between arrow/regular functions


//2 how do you call a function in javascript (keep this simple)
test()

//3 what are default parameters in a function?


//4 what is the difference between params and arguments in js
// params are what go into the {} in a function and arguments are what go into the () 


//5 what does the return keyword do in a function in js
//it outputs the data 


//6 what will a function return if there is no return keyword


//7 What is an anonymous function?


//8 What is a typical use case for anonymous functions?


//9 Can you define a function as a parameter as function?(answer:yes)
//yes


//10 What does it mean that you Can you define a function as a parameter as function?
//you can use a function within another function 


//11 Can you have a function return a function in js?(answer:yes)
//yes


//12 What does it mean that you Can you have a function return a function in js?
// you can have a function output another function 


// in realation to 9-12, what is a first class function?




ARRAYS



// 1. what is an array in javascript and at a high level how does it work?
//an array is an organized list of data entries. it works by storing a list of data entries under a single name


// 2. Explain array methods 

// pop(), 

// length(), returns number of entries

// push(), adds entry to the end of array

// shift(), 

// slice(), 

// splice(), 

// sort(), rearranges entries based on argument

// unshift(), 

// concat(), mergest two separate strings into one string

// map(), 

// filter(), only shows specific entries based on argument

// indexOf(), 

// find(), 

// findIndex(), 

// includes()




//3. What are the benefits of using spread ie'...' syntax is js (hint cloning)



//4. What is array destructuring in js



//5. When should you use reduce(), map(), foreach() and filter() in js?






OBJECTS



// 1. What is a object in JS?
// a singular peice of data that has several attributes. you can pair a keyword with a value to assign attributes to an object

// (This can get a little complicated so this is the good overview of the basics. 

//https://www.javascripttutorial.net/javascript-objects/)




// 2. How do access a value in a js object using dot '.' notation?


// 3. How do access a value in a js object using array like '[""]'notation?



// 4. what is meant by a key value pair in an object?


// 5. How do you add a key value pair in an object?


// 5b. How do you delete a key value pair in an object?


// 6. How do modify a value in an object?


// 7. how do you see if a key is in a object?


// 8. how can you clone an object?


// 9. what is object destructoring?




