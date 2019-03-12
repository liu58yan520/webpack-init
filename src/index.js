import "./style.css"

let dom = document.createElement('div')
dom.innerHTML = "<img src='" + require('./0.jpg')+"'/>";
dom.classList.add('box')
document.body.appendChild(dom)

