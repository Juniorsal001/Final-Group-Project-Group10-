document.addEventListener('DOMContentLoaded', () => {
    const forgotForm = document.getElementById('forgotForm');

    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('resetEmail').value.trim();

            if (!email) {
                alert('Please enter an email address.');
                return;
            }

            alert(`A password recovery token link has been triggered to: ${email}`);
            forgotForm.reset();
        });
    }
});