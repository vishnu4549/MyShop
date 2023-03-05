// Get the product list element
const productList = document.querySelector('.product-list');

// Add event listener to the product list to handle clicks on the "Add to Cart" button
productList.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const productId = event.target.dataset.productId;
    // TODO: Add the product to the shopping cart
  }
});
