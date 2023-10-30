// undefined 
// null

let firstName;
console.log(typeof firstName);
firstName = "Deepak";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "Deepak";
console.log(myVariable, typeof myVariable);
console.log(typeof null);

// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 7;
let num2 = "7";

console.log(num1<num2);

// == vs === 
console.log(num1 === num2);

// != vs !==

console.log(num1 !== num2);

// if else condition 

let age = 17;

if(age>=18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}

let num = 13;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

let firstName1= 0;

if(firstName1){
    console.log(firstName1);
}else{
    console.log("firstName is kinda empty");
}

// ternary operator / conditional operator 

let age1 = 3;
let drink = age1 >= 5 ? "coffee" : "milk";
console.log(drink);

// and  or operator 



if(firstName[0] === "H"){
    console.log("your name starts with H")
}

if(age > 18){
    console.log("you are above 18");
}

if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}
let firstName2 = "arshit";
let age2 = 16;

if(firstName2[0] === "H" || age2>18){
    console.log("inside if");
}else{
    console.log("inside else");
}

// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}

// if 
// else if 
// else if 
// else if 
// else 

let tempInDegree = 4;

if(tempInDegree > 40){
    console.log("too hot");
}else if(tempInDegree > 30){
    console.log("lets go for swim");
}else if(tempInDegree > 20){
    console.log("weather is cool");
}else if(tempInDegree > 10){
    console.log("it is very cold outside");
}else{
    console.log("extremely cold");
}

console.log("hello");


// switch statement 

let day = 9;

switch(day){
    case 0:
        console.log("Sunday");
        break; 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}