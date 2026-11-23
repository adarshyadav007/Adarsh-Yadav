
// Welcome message in browser console
console.log("Welcome to Adarsh's Portfolio!");

// Contact form functionality
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {

        document.getElementById("response").textContent =
            "Thank you, " + name + "! Your form is ready.";

        form.reset();

    }

});
