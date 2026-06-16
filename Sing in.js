document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!email || !password) {
                alert('Please fill out all fields.');
                return;
            }

            alert('Attempting sign-in connection...');
            // This is where your Node.js server connection logic will sit!
        });
    }
});