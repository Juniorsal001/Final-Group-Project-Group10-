// Global State for Cart
let cart = [];
let cartTotal = 0;

// 1. Mobile Menu Toggle Interaction
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// 2. Shopping Cart Toggle Layout
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('active');
}

// 3. Core Cart Interaction Business Logic
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
    
    // Quick user feedback alert alternative
    alert(`${productName} added to cart!`);
}

function updateCartUI() {
    // Update count icon badge
    document.getElementById('cart-count').innerText = cart.length;
    
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous elements
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartTotal = 0;
    } else {
        cartTotal = 0;
        cart.forEach((item) => {
            cartTotal += item.price;
            
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <strong>Nle ${item.price.toFixed(2)}</strong>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
    // Update absolute total price representation
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out!");
        return;
    }
    alert(`Thank you for your purchase! Total Paid: Nle${cartTotal.toFixed(2)}`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// 4. Form Submission and Validation Interactive Logic
function handleFormSubmit(event) {
    event.preventDefault(); // Stop standard page reload mechanism
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const membership = document.getElementById('membership').value;
    const messageBox = document.getElementById('form-message');
    
    // Simulate successful form handling
    messageBox.className = "success";
    messageBox.innerText = `Welcome aboard, ${name}! Your ${membership} membership configuration has been registered. A confirmation email was routed to ${email}.`;
    
    // Reset Form inputs completely
    document.getElementById('marketForm').reset();
}