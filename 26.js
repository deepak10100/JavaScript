const x = document.getElementById("demo")
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(showPosition)
    }catch{
        x.innerHTML=err
    }
}
function showPosition(position){
    x.innerHTML="lat " + position.coords.latitude+ "<br> log " + position.coords.longitude
}
localStorage.setItem("name","deepak")
  document.getElementById("demo").innerHTML=localStorage.getItem("name")
  sessionStorage.setItem("name","deepak")
  document.getElementById("demo").innerHTML=sessionStorage.getItem("name")
  let file = './deepak.txt'
  fetch(file).then(x=>x.text()).then(y=> document.getElementById("demo").innerHTML=y)

  let mainHeading = document.getElementById("main-heading")
       console.log(mainHeading)
        let heading = document.querySelector(".header")
        console.log(heading)
        let navItem = document.querySelector(".nav-item")
        let navItem = document.querySelectorAll(".nav-item")
        console.log(navItem)
        const mainHeading= document.getElementById("main-heading")
        console.log(mainHeading.innerHTML)
        mainHeading.textContent='deepak is a playboy'
        console.log(mainHeading.textContent)
        const mainHeading= document.getElementById("main-heading")
       mainHeading.style.color='blue'
       mainHeading.style.backgroundColor='green'
       let link = document.querySelector("a")
       let input = document.querySelector('input')
       link.setAttribute("href","www.facebook.com")
       console.log(link)
       console.log(link.getAttribute('href'))
       console.log(input.getAttribute('type'))
       let navItem = document.getElementsByClassName("nav-item")
       let navItem = document.querySelectorAll(".nav-item")
       console.log(navItem)