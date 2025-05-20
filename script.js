
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const quantityInput = document.getElementById('quantityInput');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartCount = document.getElementById('cartCount');

let cartItems = 0;

minusBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) quantityInput.value = currentValue - 1;
});

plusBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

addToCartBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  cartItems += quantity;
  cartCount.textContent = Cart;
  quantityInput.value = 1;
});
