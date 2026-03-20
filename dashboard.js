let products = JSON.parse(localStorage.getItem("products")) || []

function addProduct(){

let name=document.getElementById("name").value
let price=document.getElementById("price").value

let product={
id:Date.now(),
name:name,
price:price
}

products.push(product)

localStorage.setItem("products",JSON.stringify(products))

renderProducts()

}

function deleteProduct(id){

products=products.filter(p=>p.id!==id)

localStorage.setItem("products",JSON.stringify(products))

renderProducts()

}

function renderProducts(){

let container=document.getElementById("productList")

container.innerHTML=""

products.forEach(product=>{

let div=document.createElement("div")

div.innerHTML=`
<b>${product.name}</b> - ${product.price} FCFA
<button onclick="deleteProduct(${product.id})">Supprimer</button>
`

container.appendChild(div)

})

}

renderProducts()