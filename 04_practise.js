console.log("deepak")
var firstName ="deepak"
firstName='aman'
console.log(firstName)
let value1 ="deepak"
let value_1 = "aman"

console.log(value_1)

let firstName = 'deepak'
firstName ='aman'
console.log(firstName)
const pi = 3.14
console.log(pi)

let firstName = "deepak"
console.log(firstName.length)
console.log(firstName[firstName.length-1])
let a =firstName.trim()
console.log(a.length)
console.log(firstName.toUpperCase())
console.log(firstName.slice(0,4))

let age ="22";
let a = Number(age)
let firstName = +"deepak"
console.log(typeof a)

let string1 ='18'
let string2 ='10'
let add = +string1 + +string2
console.log(add)

let age = 22
let firstName = "deepak"
let aboutMe =`my name is ${firstName} and my age is ${age}`
console.log(aboutMe)

let firstName
let firstName = null
console.log(typeof firstName)

let num1 = 7
let num2 = 7
console.log(num1 !== num2)
console.log(num1 === num2)

let age = 19
if (age>18) {
    console.log("play ddlg")
} else {
    console.log("use can play")
}

let num = 4
if (num%2===0) {
    console.log("even")
} else {
    console.log("odd")
}

let age = 4
let drink = (age%2==0)?"even":"odd"
console.log(drink)

let firstName ="feepak"
let age = 19;
if (firstName[0]==="d" || age>18) {
    console.log("your name is start with d")
} else {
    console.log("not start")
}

let winning = 7
let userGuess = 19
if (winning == userGuess) {
    console.log("win")
} else {
    if (userGuess<winning) {
        console.log("too low")
    }else{
        console.log("too high")
    }
}

let tempInDegree = 19
if (tempInDegree>40) {
    console.log("too hot")
} else if (tempInDegree>30) {
    console.log("let go for swim")
}
else if (tempInDegree>20) {
    console.log("weather is cool")
}
else if (tempInDegree>10) {
    console.log("it is very cold outside")
}
else {
    console.log("extremely cold")
}

let day=6

switch (day) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thrusday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;

    default:
        console.log("invalid")
        break;
}

let i =0
while (i<10) {
    console.log(i)
    i++
}
console.log(`Current vlaue of i is ${i}`)

let num =100
let total =0
let i=0;
while (i<10) {
    total = total + i
    i++
}
console.log(total)

for (let i = 0; i < 9; i++) {
    console.log(i)  
}

let total =0
let i =0
for (let i = 0; i < 7; i++) {
    total = total +i
}
console.log(total)

for (let i = 0; i <10; i++) {
    if (i == 7) {
        // break;
        continue
    }
    console.log(i)
}
let i=0
do {
    console.log(i)
    i++
} while (i<10);

let fruits =['deepak','aman','deepu','arun']
console.log(fruits[2])
let numbers =[1,2,3,4,5]
console.log(numbers[2])

console.log(typeof fruits)

fruits.push("dddddd")
 fruits.unshift('deep')
let r = fruits.shift()
let r = fruits.pop("dddd")
console.log(fruits)


let num1 = 6
let num2 = num1
console.log(num1)
console.log(num2)
num1++
console.log(num1)
console.log(num2)1 

let array = ["item1",'item2']
let array1 = array
console.log(array1)
console.log(array)
array.push("deepak")
console.log(array)
console.log(array1)

let array =['deepak','aman']
let array1=['deepu','arun']
let newArray =[...array, ...array1]
array.push("item3")
console.log(array)
let fruits =['apple','mango','grapes','banana']
let [myvar,myvar1,...myvar3]=fruits
console.log(myvar3)
let fruits2 =[]
for (const key in fruits) {
    if (Object.hasOwnProperty.call(fruits, key)) {
        const element = fruits[key].toUpperCase();
        fruits2.push(element)
    }
}
console.log(fruits2)
for (const fruit of fruits) {
    fruits2.push(fruit.toUpperCase())
}
let i =0
while (i<fruits.length) {
    fruits2.push(fruits[i].toUpperCase())
    // console.log(i)
    i++
}
console.log(fruits2)
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i].toUpperCase();
   fruits2.push(element)
}
console.log(fruits2)

const person ={
    name:"deepak",
    classed:"B.com",
    age:24,
    'person hobbies':['coding','coder','programmer']
}
const newArray =[..."123456789"]
const person1={
    name:'aman',
    classed:"Bsc",
    age:24
}
const newArray = {...person, ...person1}
const {name,classed,...myObj}=person
console.log(myObj)
person['gender']="male"
console.log(person["person hobbies"])
console.log(person)
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
    }
}

let users =[
    {firstName:"deepak",userId:1,gender:"male"},
    {firstName:"deepa",userId:2,gender:"female"},
    {firstName:"deepu",userId:3,gender:"male"},
]
for (const user of users) {
    console.log(user.firstName)
}

const [{firstName},{userId},{gender}]=users
console.log(userId)