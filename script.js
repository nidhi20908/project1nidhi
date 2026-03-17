const products = [
  {id:1,name:"Urban Glow Tee",price:999},
  {id:2,name:"Chic Aura Dress",price:1499},
  {id:3,name:"Street Pulse Hoodie",price:1299}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  const list = document.getElementById("productList");
  if(!list) return;

  list.innerHTML = products.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const product = products.find(p=>p.id===id);
  cart.push(product);
   localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart!");
}

function displayCart() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");
  if(!container) return;

  container.innerHTML = cart.map(item=>`<p>${item.name} - ₹${item.price}</p>`).join('');
  const total = cart.reduce((sum,item)=>sum+item.price,0);
  totalEl.innerText = "Total: ₹" + total;
}

displayProducts();
displayCart();
