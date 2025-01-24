const Listcart = document.getElementById("cart-list");
const subtotalEl = document.getElementById("subtotalr");
const totalEl = document.getElementById("totalr");
const cartCountEl = document.getElementById("cart-count");
const checkoutButton = document.getElementById("checkout");

const apiUrl = "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889";
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

async function fetchCartData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch cart data");
    const data = await response.json();
    cartData = data.items || [];
    localStorage.setItem("cartData", JSON.stringify(cartData));
    renderCart();
  } catch (error) {
    console.error("Error fetching cart data:", error);
    alert("Failed to load cart data. Please try again later.");
  }
}

function renderCart() {
  Listcart.innerHTML = "";
  let subtotal = 0;
  let totalQuantity = 0;

  cartData.forEach(item => {
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.title}" width="50">${item.title}</td>
      <td>₹${(item.price / 100).toFixed(2)}</td>
      <td><input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="quantity"></td>
      <td class="line-price" data-id="${item.id}">₹${((item.price * item.quantity) / 100).toFixed(2)}</td>
      <td><button data-id="${item.id}" class="remove-item">🗑️</button></td>
    `;
    Listcart.appendChild(row);
  });

  subtotalEl.textContent = `₹${(subtotal / 100).toFixed(2)}`;
  totalEl.textContent = `₹${(subtotal / 100).toFixed(2)}`;
  cartCountEl.textContent = totalQuantity;

  document.querySelectorAll(".quantity").forEach(input => {
    input.addEventListener("input", e => {
      const id = e.target.getAttribute('data-id');
      let updatedQuantity = Math.floor(e.target.value) || 1;
      if (updatedQuantity < 1) updatedQuantity = 1;

      const item = cartData.find(item => item.id == id);
      if (item) {
        item.quantity = updatedQuantity;
        item.line_price = item.price * updatedQuantity;
      }

      localStorage.setItem("cartData", JSON.stringify(cartData));
      renderCart();
    });
  });

  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", e => removeItem(e));
  });
}

function removeItem(e) {
  const id = e.target.getAttribute("data-id");
  
  const modal = document.createElement("div");
  modal.id = "confirmation-modal";
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
  `;

  modal.innerHTML = `
    <p>Are you sure you want to remove this item?</p>
    <button id="confirm-remove" style="margin-right: 10px;">Yes</button>
    <button id="cancel-remove">No</button>
  `;

  document.body.appendChild(modal);

  
  document.getElementById("confirm-remove").addEventListener("click", () => {
    cartData = cartData.filter(item => item.id != id);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    renderCart();
    document.body.removeChild(modal);  
  });

  document.getElementById("cancel-remove").addEventListener("click", () => {
    document.body.removeChild(modal);  
  });
}

checkoutButton.addEventListener("click", () => {
  
  const checkoutModal = document.createElement("div");
  checkoutModal.id = "checkout-modal";
  checkoutModal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
  `;

  const totalAmount = totalEl.textContent;
  const totalItems = cartCountEl.textContent;

  checkoutModal.innerHTML = `
    <h2>Thank You for Your Purchase!</h2>
    <p>You have <strong>${totalItems}</strong> items in your cart.</p>
    <p>Total Amount: <strong>${totalAmount}</strong></p>
    <button id="close-checkout">Close</button>
  `;

  document.body.appendChild(checkoutModal);

 
  document.getElementById("close-checkout").addEventListener("click", () => {
    
    
    
    renderCart();

    
    document.body.removeChild(checkoutModal);
  });
});

if (cartData.length === 0) {
  fetchCartData();
} else {
  renderCart();
}
