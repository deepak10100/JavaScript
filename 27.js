let navItem = document.getElementsByTagName("li")
     
for(let i =0; i< navItem.length; i++){
    console.log(navItem[i])
    navItem[i].style.color='green'
}
console.log(navItem)
     for (let x of navItem){
        x.style.color='blue'
     }

     let header = document.getElementById('main-heading')
    console.log(header.innerHTML)

    let updateElement = header.innerHTML='<h1>deepak is a playboy</h1>'
    let rootNode = document.getRootNode()
    const htmlElementNode = rootNode.childNodes[1]
    console.log(htmlElementNode.childNodes)
    let textNode = htmlElementNode.childNodes[1]
    const headElementNode = htmlElementNode.childNodes[2]
    const bodyElementNode = htmlElementNode.childNodes[3]
    console.log(headElementNode.childNodes)

    const h1 = document.querySelector('h1')
    const body = h1.parentNode.parentNode
    body.style.color = 'green'
    body.style.backgroundColor='#333'
    console.log(body)

    const body = document.body
    console.log(body)
    body.style.color='blue'
    const head = document.querySelector('head')
console.log(head.parentElement)

const title = document.querySelector('title')
console.log(title.childNodes)

const container = document.querySelector('.container')
console.log(container.children)

let sectionTodo = document.querySelector(".section-todo")
console.log(sectionTodo.classList)
sectionTodo.classList.add('bgdark')
sectionTodo.classList.remove("bgdark")
console.log(sectionTodo.classList.contains("container"))
sectionTodo.classList.toggle("bg-dark")
sectionTodo.classList.toggle("bg-dark")

const todoList = document.querySelector(".todo-list")
        todoList.innerHTML="<li>deepak</li>"
        todoList.innerHTML += "<li>deepu</li>"
        todoList.innerHTML += "<li>aman</li>"

        let todoList = document.querySelector('.todo-list')
        let  li = document.createElement('li')
        li.textContent='deepak'
        todoList.appendChild(li)
        todoList.prepend(li)
        let todoList = document.querySelector('.todo-list')
       let  li = document.createElement('li')
       li.textContent='deepak'
       todoList.after(li)
       todoList.before(li)

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent='new todo'
const li2 = li.cloneNode(true)
ul.append(li)
ul.append(li2)

const ul = document.querySelector('.todo-list')
const listItem = ul.getElementsByTagName("li")
const six = document.createElement("li")
six.textContent = 'deepak'
ul.append(six)
console.log(listItem)

const sectionTodo = document.querySelector('.section-todo')
const info = sectionTodo.getBoundingClientRect()
console.log(info)

const btn = document.querySelector("#btn")
     btn.addEventListener("click",()=>{
        console.log("click")
        console.log(this)
     })

     for(let button of btn){
        button.addEventListener("click",()=>{
            console.log(this)
        })
     }

     for(let i = 0; i<btn.length; i++){
        btn[i].addEventListener("click",()=>{
            console.log(this)
        })
    }

    btn.forEach((button)=>{
        button.addEventListener("click",()=>{
            console.log(this)
        })
    })

    btn.forEach((button)=>{
        button.addEventListener("click",()=>{
            console.log(this)
        })
    })

    for(let button of btn){
        button.addEventListener("click",(e)=>{
            e.currentTarget.style.color="green"
            e.currentTarget.style.backgroundColor='skyblue'
        })
    }
    const body = document.body
    body.addEventListener("keypress",(e)=>{
        console.log(e.key)
    })

    const mainButton = document.querySelector('button')
    mainButton.addEventListener("mouseover",()=>{
        console.log('mouseover event')
    })
    mainButton.addEventListener("mouseleave",()=>{
        console.log('mouseover leave')
    })