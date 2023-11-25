let main = document.getElementById("main")
    let btn = document.getElementById("btn")
  
    main.addEventListener("mousemove",()=>{
        document.getElementById('intro').innerHTML=Math.random()
    })
    document.getElementById("intro").innerHTML=document.getElementById("intro1").childNodes[0].nodeValue
    document.getElementById("intro").innerHTML=document.getElementById("intro1").firstChild.nodeValue
    document.getElementById('demo').innerHTML=document.body.innerHTML
    document.getElementById('demo').innerHTML=document.documentElement.innerHTML
    document.getElementById('demo').innerHTML=document.getElementById("demo1").nodeName
    document.getElementById('demo').innerHTML=document.getElementById("demo1").nodeType
    const demo = document.getElementById('demo')
    const para = document.createElement("p")
    para.textContent="deepak is a bad boy"
    demo.appendChild(para)
    let demo1 = document.getElementById("demo1")
        let demo = document.getElementById("demo")
        let para = document.createElement('p')
        para.textContent="this is a para"
        demo.appendChild(para)
        demo.replaceChild(para,demo1)

        let btn = document.getElementById('btn')
        btn.addEventListener("click",()=>{
          let head = document.getElementsByTagName("h1")
          for(let i = 0; i<head.length;i++){
              head[i].style.color="green"
          }
        })

        let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.querySelectorAll("h1")
        for(let i = 0; i<head.length;i++){
            head[i].style.color="green"
        }
      })

      let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.getElementById("demo")
        head.innerHTML = window.innerHeight
        head.innerHTML = window.innerWidth
      })
      let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.getElementById("demo")
        head.innerHTML=screen.width
      })
      let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.getElementById("demo")
        head.innerHTML=screen.height
      })
      let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.getElementById("demo")
        head.innerHTML=navigator.onLine
        head.innerHTML=navigator.product
        head.innerHTML=navigator.appCodeName
        head.innerHTML=navigator.appCodeName
        head.innerHTML=window.history.forward()
        head.innerHTML=window.location.assign("https://www.google.com")
        head.innerHTML=window.history.back
        head.innerHTML=window.history.back
        head.innerHTML=window.location.port
        head.innerHTML=window.location.protocol
        head.innerHTML=window.location.pathname
        head.innerHTML=window.location.hostname
        head.innerHTML=window.location.href
        head.innerHTML=screen.pixelDepth
        head.innerHTML=screen.colorDepth
        head.innerHTML=screen.availWidth
      })
      let btn = document.getElementById('btn')
      btn.addEventListener("click",()=>{
        let head = document.getElementById("demo")
        setTimeout(() => {
            alert("deepak")
          }, 3000);
      })
      btn.addEventListener(()=>{
        function myfunc() {
            setInterval(() => {
                const d = new Date()
            document.getElementById("demo").innerHTML=d.toLocaleDateString()
            }, 1000);
        }
        clearInterval(myfunc)
      })
      btn.addEventListener("click",()=>{
        function myfunc(){
            setInterval(() => {
                const d = new Date()
            document.getElementById("demo").innerHTML=d.toLocaleTimeString()
            }, 1000);
        }
        myfunc()
    })