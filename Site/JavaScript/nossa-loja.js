let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`Adicionado ${productName} ao carrinho.`);
}
