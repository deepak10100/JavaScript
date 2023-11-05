const items=["deepak","deepu","aman"] //-> iterable
console.log(items)
for (const item of items) {
    console.log(item)
}
let names ='deepak'
console.log(names.length)
const items =["item1",'item2','item3',"item1"]
const numbers = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(4)
numbers.add(items)
console.log(numbers)
if (numbers.has(3)) {
    console.log("1 is present")
} else {
    console.log("1 is not present")
}
const items =[1,2,3,4,5,5,5,7,7,7]
const numbers = new Set(items)
let length =0
for (const element of numbers) {
    length++
}
console.log(length)
const numbers =[1,2,3,4,5,6,7]
const evenNumber = numbers.forEach(number => {
    if (number%2 ===0) {
        console.log(number)
    }
});

 numbers.forEach(number => {
    console.log(number*number)
});

const sum = numbers.forEach(number => {
    return sum + number
});
console.log(sum)
const staffDetails =[
    {name:'deepak',age:23,salary:200000,currency:'USD'},
    {name:'aman',age:20,salary:100000,currency:'india'},
    {name:'deepu',age:19,salary:80000,currency:'america'},
    {name:'deep',age:25,salary:210000,currency:'punjab'},
]

staffDetails.forEach(({salary,name}) => {
    if (salary>200000) {
        console.log(name)
    }
});
const scores =[12,55,70]
scores.forEach((score) => {
    if (score===70) 
        break;
    
    console.log(score)
});
const scores = [12, 55, 70, 47];
for (let i = 0; i < scores.length; i++) {
    const element = scores[i];
    if (element===70) {
        // break
        continue
    }
    console.log(element)
}
const studentNumber =[2,1,4,,4,,5,6,7]
studentNumber.forEach(studentNumbers => {
    console.log(studentNumbers)
});
for (let i = 0; i < studentNumber.length; i++) {
    const element = studentNumber[i];
    console.log(element)
}
scores.forEach((score) => {
  if (score === 70) 
    continue;
  
  console.log(score);
});
let total =0
scores.forEach(score => {
    total = total+score
});
console.log(total)
staffDetails.forEach(staffDetail => {
    let sentance = `i am "${staffDetail.name}" a staff of Royal Suites`
    console.log(sentance)
});
scores.forEach((score,index,array) => {
    // let sentance = `index ${index} :i am array:${array} a staff of Royal Suites`
    console.log(array)
});
const array = ['box','piper','world']
function iteratArr(name) {
    console.log(name)
}
array.forEach(iteratArr)