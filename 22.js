const rootNode = document.getRootNode()
console.log(rootNode)

const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode.childNodes)

const headElementNode = htmlElementNode.childNodes[0]
console.log(headElementNode)

const textNode1 = htmlElementNode.childNodes[1]
console.log(textNode1)

const bodyElementNode = htmlElementNode.childNodes[2]
console.log(headElementNode.childNodes)

const h1 = document.querySelector('h1')
const body = h1.parentNode.parentNode
console.log(body)

const container = document.querySelector('.container')
console.log(container.childNodes)

const sectionTodo=document.querySelector(".section-todo")
console.log(sectionTodo.classList)

sectionTodo.classList.add("bg-dark")
const ans = sectionTodo.classList.contains("container")
console.log(ans)

const todoList = document.querySelector('.todo-list')
// todoList.innerHTML='<li>new todo</li>'
// console.log(todoList)
todoList.insertAdjacentElement("afterbegin",'<li>new todo</li>')

const newTodoItem = document.createElement("li")
newTodoItem.textContent='Tech Student'
const todoList = document.querySelector('.todo-list')
// todoList.prepend(newTodoItem)
todoList.after(newTodoItem)
const ul = document.querySelector('.todo-list')
const li = document.createElement('li')
li.textContent='new todo'
const li2 = li.cloneNode(true)
ul.append(li)
ul.append(li2)
const ul = document.querySelector(".todo-list")
const listItems = ul.getElementsByTagName('li')
const six = document.createElement("li")
six.textContent='item6'
ul.append(six)
const sectionTodo= document.querySelector('.section-todo')
const info = sectionTodo.getBoundingClientRect()
console.log(info)