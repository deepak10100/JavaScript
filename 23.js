console.log(window.document)
console.dir(document)
console.dir(document.getElementById("main-heading"))
console.log(document.getElementById("main-heading"))
let mainHeading = document.querySelector("h1")
mainHeading.style.backgroundColor='green'
mainHeading.style.color='white'
let link = document.getElementsByClassName(".nav")
console.log(link)
for (let i = 0; i < link.length; i++) {
    const element = link[i];
    console.log(element)
}
console.log(link.getAttribute('href'))
link.setAttribute('href','www.facebook.com')
console.log(link.getAttribute("href"))
mainHeading.textContent ='deepak is a bad boy'

let navItem = document.getElementsByTagName("a")
for (const element of navItem) {
    element.style.color="white"
    element.style.backgroundColor="blue"
}
let navItem = document.getElementsByClassName("nav-item")
console.log(navItem)
for (let i = 0; i < navItem.length; i++) {
    const element = navItem[i];
    element.style.color="white"
    element.style.backgroundColor="blue"
}
console.log(mainHeading)
let mainHeading = document.getElementById("main-heading")
mainHeading.innerHTML='<h1>deepak</h1>'
mainHeading.innerHTML='<button>deepak</button>'
const rootNode = document.getRootNode()
const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode.childNodes[1])
console.log(htmlElementNode[1].nextSibling)
console.log(htmlElementNode.paren/tNode)
const heading = document.querySelector('h1')
const container =heading.parentNode
container.style.color='green'
const container = document.querySelector(".container")
console.log(container.classList.add('deepak'))
container.classList.remove('container')
const a =container.classList.contains('container')
console.log(a)
container.classList.toggle('container')
container.classList.toggle('container')
const listItem = document.createElement('li')
listItem.textContent='deepak programmer'
container.append(listItem)s