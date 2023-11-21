const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.innerText)
console.log(mainHeading.style)
mainHeading.style.backgroundColor='blue'
mainHeading.style.border='2px solid black'
mainHeading.textContent='my name is aman'
console.log(mainHeading)
const mainHeading = document.querySelector("#main-heading")
console.log(mainHeading)
const header = document.querySelector(".header")
const nav1 = document.querySelectorAll(".nav-item")
console.log(nav1)
const link = document.querySelector("a")
console.log(link.getAttribute("href"))
const inputElement = document.querySelector("input")
console.log(inputElement.getAttribute("type"))
const nav = document.getElementsByClassName("nav-item")
console.log(nav)
let navItem = document.getElementsByTagName('a')
console.log(navItem)
for (let i = 0; i < navItem.length; i++) {
    const element = navItem[i];
     element.style.backgroundColor="black"
     element.style.color="green"
     element.style.fontWeight='bold'
}
for (const element of navItem) {
    element.style.backgroundColor="black"
     element.style.color="green"
     element.style.fontWeight='bold'
}