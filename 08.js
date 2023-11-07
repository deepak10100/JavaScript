const words= ['spray','elite','exuberant','deepak']
const result = words.filter((word)=>{
    return word.length >=6
})
console.log(result)

const numbers = [1,3,4,5,6,7,11,22,44,77,]
const filtersNumber = numbers.filter((num)=>{
    return num>10
})
console.log(filtersNumber)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


let a= array.filter((num)=>{
    for (let i = 2; i < num; i++) {
        if (num % i ===0) {
            return false
        }
    }
    return num>1
})
console.log(a)

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

let filteredUsers = users.filter((user)=>{
    return user.age>40 && user.occupation==='programmer' 
}).sort((a,b)=>{
   return a.age-b.age
}).map((user)=>{
    return user.name
})
console.log(filteredUsers)

const userDetails ={
    firstName:'deepak',
    lastName:'malakar',
    userName:'virus',
    email:'deepak@gmail.com',
    address:'dundaher ghaziabad',
    age:24,
    hobby:'programming'
}
const userName = Object.keys(userDetails)
.filter((key)=>key.includes("Name"))
.reduce((object,key)=>  Object.assign(object,{
    [key]:userDetails[key]
}))

console.log(userName)

let team =[
    {
        named:'deepak',
        position:'developer'
    },
    {
        named:'deepu',
        position:'ui developer'
    },
    {
        named:'deepk',
        position:'content developer'
    },
]
let a = team.filter((member)=>{
   return  member.position!=='developer'
})
console.log(a)
let a = team.filter((member)=>{
   return  member.position==='developer'
})
console.log(a)