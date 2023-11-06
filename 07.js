let arr = [3,4,5,6]
for (let i = 0; i < arr.length; i++) {
     arr[i] = arr[i]*3;
}
console.log(arr)
let modifiedArr = arr.map((element)=>{
    return element*3
})
console.log(modifiedArr)

let users =[
    {firstName:"deepak",lastName:'malakar'},
    {firstName:"deep",lastName:'malak'},
    {firstName:"deepu",lastName:'malakik'},
]
let userFullNames =users.map((element)=>{
    return `${element.firstName} ${element.lastName}`
})
console.log(userFullNames)

let arr =[1,4,9]
let roots = arr.map((x)=>{
   return Math.sqrt(x)
})
console.log(roots)
let a =arr.map((element ,index, array)=>{
    console.log(element)
    console.log(array)
    console.log(index)
},80)

console.log(a)
const numbers =[1,4,9]
let total =0
const withText = numbers.map((cost)=>{
   return total = total + cost*1.2
})
console.log(withText)
console.log(total)
const double = numbers.map((num)=>{
 return num *2
})
console.log(double)
console.log(numbers)

const product =[
    {name:'deepak'},
    {name:'deepu'},
    {name:'aman'},
]
const productName = product.map((products)=>{
   return {...products , price:100}
})
console.log(productName)
console.log(
    [1,3].map((x,index)=>{
        console.log(`visit ${index}`)
        return x*2
    })
)

const string ="JavaScript"
const a = Array.prototype.map.call(string,eachLetter=>{
    return `${eachLetter}=1`
})
console.log(a)
const prices = [1,2,3,4,5]
const discount = 1
const discountPrice = prices.map((price)=>{
    return price-discount
})
console.log(discountPrice)