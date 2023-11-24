let container = document.querySelector('.container')
let a = container.getBoundingClientRect().top
console.log(a)
let btn = document.querySelectorAll('.btn')
btn.addEventListener("click", ()=>{
    console.log("click me")
})
btn.addEventListener("click", function(){
    console.log("click me")
    console.log(this)
})

for (const button of btn ) {
    button.addEventListener("click",function () {
        console.log(this)
    })
}

btn.forEach(allButtons => {
    allButtons.addEventListener("click",function () {
        console.log(this)
    })
});
let allbutton = document.querySelectorAll("button")
for (const buttons of allbutton) {
    buttons.addEventListener("click", (e)=> {
       e.target.style.color="white"
       e.target.style.backgroundColor="blue"
    })
}

const body = document.body
body.addEventListener("keypress",(a)=>{
    console.log(a)
})

const mainButton = document.querySelector("button")
console.log(mainButton)
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover")
})
mainButton.addEventListener("mouseleave",()=>{
    console.log("mouseleve")
})

let grandparent = document.querySelector('.grandparent')
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
grandparent.addEventListener("click",function () {
    console.log("grand !!")
},true)

parent.addEventListener("click",function () {
    console.log("parent !!")
},true)

child.addEventListener("click",function () {
    console.log("child !!")
},true)

grandparent.addEventListener("click", (e)=> {
    console.log(e.target)
})
