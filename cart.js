// Define an array to store the cart items
let cartItems = [];

// Get references to the cart elements
const cart = document.getElementById('cart');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');
const placeOrderButton = document.getElementById('place-order');

// Get references to the product elements
const products = document.getElementById('products');
const productButtons = document.getElementsByClassName('add-to-cart');

// Add click event listeners to the product buttons
for (let i = 0; i < productButtons.length; i++) {
  productButtons[i].addEventListener('click', function() {
    addToCart(this.dataset.productId);
  });
}

// Define a function to add an item to the cart
function addToCart(productId) {
  // Find the product with the matching ID
  const product = getProductById(productId);

  // Add the product to the cart
  cartItems.push(product);

  // Update the cart display
  updateCart();
}

// Define a function to get a product by its ID
function getProductById(productId) {
  // This is just a placeholder function, you would likely fetch product data from a server in a real application
  switch (productId) {
    case '1':
      return { id: '1', name: 'Product 1', price: 10 };
    case '2':
      return { id: '2', name: 'Product 2', price: 20 };
    case '3':
      return { id: '3', name: 'Product 3', price: 30 };
    default:
      return null;
  }
}

// Define a function to update the cart display
function updateCart() {
  // Clear the cart display
  cartItemsDiv.innerHTML = '';

  // Add the cart items to the display
  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${cartItem.name}</td>
      <td>$${cartItem.price}</td>
    `;
    cartItemsDiv.appendChild(row);
  }

  // Update the cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalDiv.innerHTML = `<p>Total: $${cartTotal}</p>`;

  // Show the place order button if there are items in the cart
  if (cartItems.length > 0) {
    placeOrderButton.style.display = 'block';
  } else {
    placeOrderButton.style.display = 'none';
  }
}
