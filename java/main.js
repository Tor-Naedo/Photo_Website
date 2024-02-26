//Shopping
let cart = [];

function addToCart(name, quantityId, price) {
    // Check if the cart already contains the item
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Update the quantity and total if the item is already in the cart
        existingItem.quantity += 1;

        if (existingItem.quantity > 4) {
            // Limit the quantity to a maximum of 4
            existingItem.quantity = 4;
        }

        existingItem.total = existingItem.quantity * price;
    } else {
        // Check if the cart has reached the maximum number of different items
        if (cart.length >= 4) {
            alert("You have reached the maximum limit of 4 different items in your cart.");
            return;
        }

        // Add the item to the cart
        let total = price;
        cart.push({
            name: name,
            quantity: 1,
            total: total
        });
    }

    // Calculate the total price for all items in the cart
    let grandTotal = cart.reduce((total, item) => total + item.total, 0);

    // Show a message or perform any other actions
    alert(`Added to cart: ${name} - Total: $${grandTotal.toFixed(2)}`);
}


// Login
function login() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var username = usernameInput.value;
    var password = passwordInput.value;
    var errorMessage = document.getElementById("error-message");

    // Check for a simple example of a username and password
    if (username === "admin" && password === "12345") {
        errorMessage.textContent = ""; // Clear any previous error messages
        alert("Login successful!"); // Replace with your actual login logic

        // Redirect to welcome.html
        window.location.href = "./welcome.html";
    } else {
        alert("Invalid username or password");
        // Clear the input fields
        usernameInput.value = "";
        passwordInput.value = "";
    }
}

// Search Color
var searchButton = document.querySelector('#search-button');
var pictures = document.querySelectorAll('.image-containeer');

searchButton.addEventListener('click', function () {
    let term = document.querySelector('#search-picture input').value.toLowerCase();

    pictures.forEach((picture) => {
        let title = picture.querySelector('.image-header').textContent.toLowerCase();
        if (title.indexOf(term) !== -1) {
            picture.style.display = 'block';
        } else {
            picture.style.display = 'none';
        }
    })
})

// Invoice
function redirectToInvoice() {
    // Redirect to the invoice page or perform any other actions
    window.location.href = "./Invoice.html";
}