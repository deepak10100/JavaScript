// let foo = "foo"
// console.log(foo)
// function getFullName(firstName,lastName) {
//     console.log(foo)
//     let myVar = "var inside func"
//     console.log(myVar)
//     const fullName = firstName + lastName
//     return fullName
// }
// const personName = getFullName("deepak ","malakar")
// console.log(personName)

// const lastName ='malakar'
// const printName = function () {
//     const firstName ='deepak'
//     function myFunction() {
//         console.log(firstName)
//         console.log(lastName)
//     }
//     myFunction()
// }
// printName()

// function otherFunction() {
//     function innerFunction() {
//         console.log('hello world')
//     }
//     return innerFunction
// }
// const ans = otherFunction()
// ans()

// function printFullName(firstName,lastName) {
//     function printName() {
//         console.log(firstName,lastName)
//     }
//     return printName
//     // printName()
// }
// let a =printFullName("deepak","malakar")
// a()

// function hello(x) {
//     const a ='varA'
//     const b = 'varB'
//     return function () {
//         console.log(a,b,x)
//     }
// }
// let ans = hello('deep')
// ans()

// function myFunction(power) {
//     return function (number) {
//         return number ** power
//     }
// }
// let square = myFunction(2)
// let ans = square(3)
// console.log(ans)

// const cube = myFunction(3)
// const ans2 = cube(3)
// console.log(ans2)

// function func() {
//     let counter =0
//     return function () {
//         if (counter<1) {
//             console.log("Hi You Called me")
//             counter++
//         }else{
//             console.log("Mai already ek bar call ho chuka hu")
//         }
//     }
// }
// const myFunc=func()
// myFunc()
// myFunc()

// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName="deepak"
// console.log(firstName)
// console.log(fullName)
// function myFunction() {
//     console.log('this is my function')
// }
// var firstName = "deepak"
// var lastName = 'malakar'
// var fullName = firstName + ' ' + lastName
// console.log(fullName)
// console.log(myFunction)
// var myFunction= function () {
//     console.log('this is my function')
// }
// console.log(myFunction())
// console.log(firstName)
// let firstName
// console.log(firstName)
// console.log(typeof firstName)
// let firstName='deepak'

console.log('hello world')
let firstName = 'deepak'
let lastName = 'malakar'
const myFunction = function () {
    let var1 = 'First Variable'
    let var2 ='Second Variable'
    console.log(var1)
    console.log(var2)
}
myFunction()