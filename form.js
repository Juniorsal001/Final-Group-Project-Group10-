// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element (replace '.market-form' with your form's actual class or ID)
    const marketForm = document.querySelector('.market-form');

    if (marketForm) {
        marketForm.addEventListener('submit', function(event) {
            // 1. Stop the default form submission (prevents page reload)
            event.preventDefault();

            // 2. Grab the input values
            const username = document.getElementById('username')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const password = document.getElementById('password')?.value.trim();

            // 3. Basic Validation Check
            if (!username || !email || !password) {
                alert('Please fill out all required fields.');
                return; // Stop the function if validation fails
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // 4. Success Action (Where you would normally send data to a server)
            alert(`Welcome aboard, ${username}! Your registration was successful.`);
            
            // Optional: Reset the form fields after successful submission
            marketForm.reset();
        });
    }
});

// Helper function to validate email format using Regex
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}