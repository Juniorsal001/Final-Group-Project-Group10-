// 1. Core State Array Tracker
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. Select All Product Detail Blocks dynamically
    const productCards = document.querySelectorAll(".product-detail-card");

    productCards.forEach((card) => {
        const minusBtn = card.querySelector(".minus-btn");
        const plusBtn = card.querySelector(".plus-btn");
        const qtyInput = card.querySelector(".qty-input");
        const addToCartBtn = card.querySelector(".add-to-cart-btn");

        // Step Counter Increment Click Action
        plusBtn.addEventListener("click", () => {
            let val = parseInt(qtyInput.value);
            qtyInput.value = val + 1;
        });

        // Step Counter Decrement Click Action
        minusBtn.addEventListener("click", () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });

        // Add to Cart Button Operation
        addToCartBtn.addEventListener("click", () => {
            const productName = card.querySelector(".product-title").textContent;
            const priceText = card.querySelector(".price-tag").textContent;
            const quantity = parseInt(qtyInput.value);

            // Clean numerical value extraction (removes letters/spaces)
            const itemPrice = parseFloat(priceText.replace(/[^\d.]/g, ""));

            // Check if item is already in cart array to group quantities
            const existingItem = cart.find(item => item.name === productName);

            if (existingItem) {
                existingItem.qty += quantity;
            } else {
                cart.push({
                    name: productName,
                    price: itemPrice,
                    qty: quantity
                });
            }

            // Fixes Alert Bug: Evaluates correct template literal variable strings
            alert(`${productName} added to cart!`);
            
            // Sync up display panels
            updateCartUI();
            
            // Auto reset item step selection back down to 1
            qtyInput.value = 1;
        });
    });
});

// 3. UI Redraw Rendering Engine
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCountElement = document.getElementById("cart-count");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear previous rendering content
    cartItemsContainer.innerHTML = "";

    let runningTotal = 0;
    let totalItemsCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cart.forEach((item) => {
            const lineCost = item.price * item.qty;
            runningTotal += lineCost;
            totalItemsCount += item.qty;

            // Generate structured rows
            const row = document.createElement("div");
            row.classList.add("cart-item");
            
            // Outputs both items natively formatted with Nle currency prefixes
            row.innerHTML = `
                <span>${item.qty}x ${item.name}</span>
                <strong>Nle ${lineCost.toFixed(2)}</strong>
            `;
            cartItemsContainer.appendChild(row);
        });
    }

    // Push calculations out onto visible tracker fields
    cartCountElement.textContent = totalItemsCount;
    cartTotalElement.textContent = runningTotal.toFixed(2);
}

// 4. Sidebar Toggle Animation Layer
function toggleCart() {
    document.getElementById("cart-sidebar").classList.toggle("active");
}

// 5. Checkout Reset State Rule
function checkout() {
    const totalAmount = document.getElementById("cart-total").textContent;
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert(`Checking out! Total Paid: Nle ${totalAmount}`);
    cart = [];
    updateCartUI();
    toggleCart();
}