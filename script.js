// Simple form validation function
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    return true;
}

// Attach form validation to the submit button
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", validateForm);
