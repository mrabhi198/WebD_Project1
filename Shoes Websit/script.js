// JavaScript for smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for toggling navigation menu on mobile devices
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// JavaScript for handling form submission (assuming you have a form with id="loginForm")
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add your form submission logic here, like sending a request to a server
    // Example:
    // const formData = new FormData(this);
    // fetch('your-backend-url', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});


// add to cart
// Define an array to store cart items
let cart = [];

// Function to handle adding items to the cart
function addToCart(productName, price) {
    // Add the item to the cart array
    cart.push({ name: productName, price: price });
    
    // Update the cart icon or display
    updateCartIcon();
    
    // You can also provide feedback to the user, for example:
    alert('Item added to cart!');
}

// Function to update the cart icon or display
function updateCartIcon() {
    // Get the cart icon element and update its content
    let cartIcon = document.getElementById('cart-icon');
    cartIcon.innerText = `Cart (${cart.length})`;
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Retrieve product details from the button's attributes or nearby elements
        let productName = this.dataset.productName;
        let price = parseFloat(this.dataset.price);
        
        // Call the addToCart function with the product details
        addToCart(productName, price);
    });
});
