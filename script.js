let cart=[]

function updateCart(){

document.getElementById("cart-count").innerText=cart.length

let items=document.getElementById("cart-items")
items.innerHTML=""

let total=0

cart.forEach((item,index)=>{

total+=item.price

let li=document.createElement("li")

li.innerHTML=`
${item.name} - ${item.price} FCFA
<button onclick="removeItem(${index})">X</button>
`

items.appendChild(li)

})

document.getElementById("cart-total").innerText=total

}

function addToCart(name,price){

cart.push({name,price})

updateCart()

}

function removeItem(index){

cart.splice(index,1)

updateCart()

}

function clearCart(){

cart=[]

updateCart()

}

function toggleCart(){

let panel=document.getElementById("cart-panel")

panel.style.display=panel.style.display==="block"?"none":"block"

}

function toggleArtisan(){

let panel=document.getElementById("artisan-panel")

panel.style.display=panel.style.display==="block"?"none":"block"

}

function addProduct(){

let name=document.getElementById("product-name").value
let price=document.getElementById("product-price").value
let image=document.getElementById("product-image").files[0]

if(name=="" || price==""){
alert("Remplir tous les champs")
return
}

let reader=new FileReader()

reader.onload=function(e){

let product={
name:name,
price:price,
image:e.target.result
}

let products=JSON.parse(localStorage.getItem("products")) || []

products.push(product)

localStorage.setItem("products",JSON.stringify(products))

alert("Produit ajouté avec succès")

}

if(image){
reader.readAsDataURL(image)
}

}
function checkout(){

if(cart.length==0){
alert("Panier vide")
return
}

let message="Bonjour je souhaite commander :%0A%0A"

let total=0

cart.forEach(item=>{
message+=`- ${item.name} : ${item.price} FCFA%0A`
total+=item.price
})

message+=`%0ATotal : ${total} FCFA`

window.open("https://wa.me/22940175015?text="+message)

}
// animation simple au scroll

const cards=document.querySelectorAll(".card")

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top
const screen=window.innerHeight

if(position<screen-100){
card.style.opacity="1"
card.style.transform="translateY(0)"
}

})

})
function toggleFAQ(){

let panel=document.getElementById("faq-panel")

if(panel.style.display=== "block"){
panel.style.display= "none"
}else{
panel.style.display= "block"
}

}

function toggleAnswer(element){

let answer=element.nextElementSibling

if(answer.style.display==="block"){
answer.style.display="none"
}else{
answer.style.display="block"
}

}
function editProduct(id){

let newName=prompt("Nouveau nom du produit")

products=products.map(p=>{
if(p.id===id){
p.name=newName
}
return p
})

localStorage.setItem("products",JSON.stringify(products))

renderProducts(<button onclick="editProduct(${product.id})">Modifier</button>
<button onclick="deleteProduct(${product.id})">Supprimer</button>)

}
