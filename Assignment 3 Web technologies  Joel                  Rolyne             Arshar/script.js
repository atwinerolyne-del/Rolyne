// ===============================
// GOOD TIMES SUPERMARKET JAVASCRIPT
// ===============================

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Good times Supermarket!");
});


// ===============================
// ADD TO CART FUNCTION
// ===============================

let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;

    alert(productName + " has been added to your cart.\nPrice: UGX " + price);

    // Update cart counter if it exists
    let cart = document.getElementById("cart-count");

    if (cart) {
        cart.textContent = cartCount;
    }
}


// ===============================
// SEARCH PRODUCTS
// ===============================

function searchProducts() {
    let searchInput = document.getElementById("searchInput");
    let searchValue = searchInput.value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {
        let productName = product.textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// ===============================
// CONTACT FORM VALIDATION
// ===============================

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    alert("Thank you, " + name + "!\nYour message has been sent successfully.");

    return true;
}


// ===============================
// NEWSLETTER SUBSCRIPTION
// ===============================

function subscribe() {

    let email = document.getElementById("subscribeEmail").value;

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you for subscribing to Goodtimes supermarket!");
}


// ===============================
// SHOW SPECIAL OFFER
// ===============================

function showOffer() {

    alert(
        "🎉 SPECIAL OFFER 🎉\n\n" +
        "Buy 2 packets of selected products and get 10% OFF!\n\n" +
        "Offer available while stocks last."
    );
}


// ===============================
// DARK/LIGHT MODE
// ===============================

function toggleMode() {

    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("modeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}


// ===============================
// BACK TO TOP BUTTON
// ===============================

window.addEventListener("scroll", function () {

    let button = document.getElementById("topButton");

    if (button) {

        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    }

});


function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}