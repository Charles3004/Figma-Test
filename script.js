    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let terms = document.getElementById("terms").checked;

        // Clear previous errors
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("termsError").textContent = "";

        // Validate Name
        if (name === "") {
            document.getElementById("nameError").textContent = "Full Name / Company Name is required.";
            isValid = false;
        }

        // Validate Email
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailPattern)) {
            document.getElementById("emailError").textContent = "Enter a valid email address.";
            isValid = false;
        }

        // Validate Password
        if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // Validate Terms Agreement
        if (!terms) {
            document.getElementById("termsError").textContent = "You must agree to the Terms of Service.";
            isValid = false;
        }

        // If everything is valid, submit the form (for now, just log success)
        if (isValid) {
            alert("Account successfully created!");
            document.getElementById("registerForm").reset();
        }
    });
