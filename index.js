// Define variables for username and password
let username = "";
let password = "";

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get the values from the input fields
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    // Perform validation or further processing here

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// Add event listener to the form
document.getElementById("loginForm").addEventListener("submit", handleSubmit);