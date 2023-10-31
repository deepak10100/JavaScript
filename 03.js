let i = 0; // 1 2 3 4

while(i<=9){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);
console.log("hello");

// while loop example 
let num = 100;
let total = 0; //1 + 2 +3
let j = 0;


while(j<=100){
    total = total + j;
    j++;
}


console.log(total);

// intro to for loop 
// print 0 to 9

for(let k = 0;k<=9;k++){
    console.log(k);
}

// for loop example 

let total1 = 0;

let num1 = 100;

for(let i = 1; i<=num1; i++){
    total1 = total1 + i;
}

console.log(total1);

// break keywork

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}
console.log("hello there");

// do while loop

while(i<=9){
    console.log(i);
    i++;
}

let i = 10;
do{
    console.log(i);
    i++;
}while(i<=9);

console.log("value of i is ", i);
