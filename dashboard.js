let currentUser = JSON.parse(localStorage.getItem("currentUser"))

if(!currentUser){
alert("Vous devez être connecté")
window.location.href = "connexion.html"
}

/* récupérer produits */

let allProducts = JSON.parse(localStorage.getItem("products")) || []

function addProduct(){

let name = document.getElementById("name").value
let price = document.getElementById("price").value

if(name === "" || price === ""){
alert("Remplir les champs")
return
}

let product = {
id: Date.now(),
name: name,
price: price,
owner: currentUser.email
}

allProducts.push(product)

localStorage.setItem("products", JSON.stringify(allProducts))

renderProducts()

}

/* afficher seulement les produits de l'utilisateur */

function renderProducts(){

let container = document.getElementById("productList")

container.innerHTML = ""

let userProducts = allProducts.filter(p => p.owner === currentUser.email)

userProducts.forEach(product => {

let div = document.createElement("div")

div.innerHTML = `
<b>${product.name}</b> - ${product.price} FCFA
<button onclick="deleteProduct(${product.id})">Supprimer</button>
`

container.appendChild(div)

})

}

function deleteProduct(id){

allProducts = allProducts.filter(p => p.id !== id)

localStorage.setItem("products", JSON.stringify(allProducts))

renderProducts()

}

renderProducts()
