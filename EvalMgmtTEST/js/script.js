function loginUser() {
    // Get the username and password entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password meet the validation criteria
    if (username === "admin" && password === "password") {
        // If the credentials are correct, redirect to the options page
        window.location.href = "/html/reason.html";
        return false; // Prevent the form from submitting
    } else {
        // If the credentials are incorrect, display an error message
        alert("Invalid username or password. Please try again.");
        return false; // Prevent the form from submitting
    }
}
function redirectToHome() {
    window.location.href = "/html/home.html";
}

function logout() {
    if (confirm("Are you sure you want to log out?")) {
        window.location.href = "/html/home.html";
        alert("Logged out successfully.");
    }
}
function redirectToFindings() {
    window.location.href = "/html/findings.html";
}


function toggleDropdown(event) {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.formdropbtn')) {
        var dropdowns = document.getElementsByClassName("formdropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Prevent dropdown from closing when clicking on checkboxes
document.addEventListener('click', function(event) {
    var dropdown = document.getElementById("myDropdown");
    if (event.target.closest('.formdropdown-content') && event.target.type === 'checkbox') {
        event.stopPropagation(); // Prevent event from reaching the window.onclick handler
    }
});
