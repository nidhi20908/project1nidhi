const products=[
{id:1,name:"Urban Hoodie",price:1999,category:"hoodie",img:"https://source.unsplash.com/300x400/?hoodie",tag:"Trending"},
{id:2,name:"Elegant Dress",price:2999,category:"dress",img:"https://source.unsplash.com/300x400/?dress",tag:"Hot"},
{id:3,name:"Street Jacket",price:2499,category:"jacket",img:"https://source.unsplash.com/300x400/?jacket",tag:"New"},
{id:4,name:"Casual Tee",price:999,category:"hoodie",img:"https://source.unsplash.com/300x400/?tshirt",tag:"Sale"}
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
let currentProducts=[...products];

function displayProducts(list=currentProducts){
const container=document.getElementById("productList");
if(!container) return;
container.innerHTML=list.map(p=>`
<div class="card">
<div class="badge">${p.tag}</div>
<img src="${p.img}">
<div class="card-content">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
<button onclick="addWishlist(${p.id})">❤️ Wishlist</button>
</div>
</div>
`).join('');
}

function addToCart(id){
const product=products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart!");
}
function addWishlist(id){
const product=products.find(p=>p.id===id);
wishlist.push(product);
localStorage.setItem("wishlist",JSON.stringify(wishlist));
alert("Added to wishlist ❤️");
}

function displayCart(){
const container=document.getElementById("cartItems");
const totalEl=document.getElementById("total");
if(!container) return;

container.innerHTML=cart.map(item=>`<p>${item.name} - ₹${item.price}</p>`).join('');
const total=cart.reduce((sum,item)=>sum+item.price,0);
totalEl.innerText="Total: ₹"+total;
}
function clearCart(){
cart=[];
localStorage.setItem("cart",JSON.stringify(cart));
location.reload();
}

function checkout(){
alert("🎉 Order placed successfully!");
clearCart();
}

function filterCategory(cat){
if(cat==='all') currentProducts=[...products];
else currentProducts=products.filter(p=>p.category===cat);
displayProducts();
}
const searchInput=document.getElementById("search");
if(searchInput){
searchInput.addEventListener("input",(e)=>{
const val=e.target.value.toLowerCase();
const filtered=products.filter(p=>p.name.toLowerCase().includes(val));
displayProducts(filtered);
});
}


displayProducts();
displayCart();
