const numbers =[4,2,5,8]
function myFunc(number,index) {
    console.log(`Index is ${index} number is ${number}`)
}
myFunc()

numbers.forEach((number,index) => {
    console.log(`index is ${index} number is ${number}`)
});
const Users=[
    {firstName:"deepak",age:23},
    {firstName:"deepa",age:22},
    {firstName:"deepu",age:24},
    {firstName:"deepika",age:25}

]
Users.forEach((users, index) => {
    console.log(`Index of :${index} and users name is :${users.firstName}`)
});

const numbers =[3,4,5,6,7,8]
const squareNumber = numbers.map((numbers,index)=>{
    return  numbers
})
console.log(squareNumber)

const Users =[
    {firstName:'deepak',age:23},
    {firstName:'deepa',age:24},
    {firstName:'deepk',age:2},
    {firstName:'deepik',age:26}
]
const UserNames = Users.map((user)=>{
    console.log(user.firstName)
})

const numbers =[1,23,4,5,6,7,8]
const sum = numbers.reduce((acc,currentValue)=>{
    return acc + currentValue
},100)
console.log(sum)
const evenNumbers = numbers.filter((number)=>{
    return number%2 ===0
})
console.log(evenNumbers)

const userCart =[
    {productId:1,productName:'mobile',price:12000},
    {productId:2,productName:'lava mobile',price:13000},
    {productId:3,productName:'oppo mobile',price:15000}
]

const totalAmount = userCart.reduce((totalPrice,item)=>{
    return totalPrice + item.price
},0)
console.log(totalAmount)

const userNames =['deepak','aman','arun','deepu']
userNames.sort()
console.log(userNames)

const numbers =[5,7,8,9,0,9]
numbers.sort((a,b)=>{
    return a-b
})
console.log(numbers)

const products =[
    {productId:1,productName:'p1',price:300},
    {productId:2,productName:'p2',price:3000},
    {productId:3,productName:'p3',price:200},
    {productId:4,productName:'p4',price:8000},
    {productId:5,productName:'p5',price:5000},
]

const lowToHigh=products.sort((a,b)=>{
    return a.price - b.price
})
console.log(lowToHigh)
const highToLow=products.slice(0).sort((a,b)=>{
    return b.price - a.price 
})
console.log(highToLow)

const users =[
    {userId:1, userName:'deepak'},
    {userId:2, userName:'deepa'},
    {userId:3, userName:'deepika'},
    {userId:4, userName:'deep'},
    {userId:5, userName:'deepu'}
]
let myUser = users.find((user)=>{
   return user.userId===3
})
console.log(myUser)

const userCart =[
    {productName:'mobile',productId:1,price:12000},
    {productName:'oppo mobile',productId:2,price:13000},
    {productName:'mi mobile',productId:3,price:15000}
]
let ans = userCart.some((cartItem)=>{
    return cartItem.price>13000
})
console.log(ans)

const myArray = [1,2,3,4,5,6]
myArray.fill(7,2,5)
console.log(myArray)

const myArray =['item1','item2','item3']
let deletedItem = myArray.splice(1,2,'deepak','deepu')
console.log(deletedItem)
console.log(myArray)

