function goToProducts(){
window.location.href="produits.html"
}

let cart=[]

function addToCart(name,price){
cart.push({name,price})
alert(name+" ajouté")
}

function toggleFAQ(){
let panel=document.getElementById("faq-panel")

panel.style.display =
panel.style.display==="block" ? "none" : "block"
}

function toggleAnswer(el){
let p=el.nextElementSibling

p.style.display =
p.style.display==="block" ? "none" : "block"
}
let user = JSON.parse(localStorage.getItem("currentUser"))

if(user){

let nav = document.querySelector(".nav-right")

if(nav){
nav.innerHTML = `
<span>👤 ${user.name}</span>
<button onclick="logout()">Déconnexion</button>
`
}

}
function logout(){

localStorage.removeItem("currentUser")

alert("Déconnecté")

window.location.href = "index.html"

}
