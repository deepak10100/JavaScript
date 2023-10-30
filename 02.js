console.log("hello world");
"use strict";
// declare a variable 
var firstName = "deepak";
// use a variable 
console.log(firstName);
// change value 
firstName = "deepu";
console.log(firstName);
var value1 = 2;
console.log(value1);
var first_name = "deepak"; // snake case writing 
var firstName = "deepak"; // camel case writing 
let firstName = "deepak";
firstName = "deepu";
console.log(firstName);
const pi = 3.14;
console.log(pi);
let firstName = "deepakdeepuamanarun";
console.log(firstName.length);

console.log(firstName[firstName.length-2]);
// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "Deepak";

console.log(firstName.length);
firstName = firstName.trim(); 
console.log(firstName)
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); 
console.log(newString);

// typeof operator 

// data types (primitive data types)
// string "deepak"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "deepak";

// console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

let myStr = +"34";
console.log(typeof myStr);

let age = "18";
age = Number(age);
console.log(typeof age);

// string concatenation 

let string1 = "17";
let string2 = "10";

let newString1 = +string1 + +string2;
console.log(typeof newString1);
// template string 
let age1 = 22;
let firstName = "deepak"

// "my name is deepak and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age1}`

console.log(aboutMe);