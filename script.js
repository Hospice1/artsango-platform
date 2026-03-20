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
