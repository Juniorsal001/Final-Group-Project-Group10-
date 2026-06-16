document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.passcode-input');
    const gateCard = document.getElementById('passcodeGate');
    const dashboardCard = document.getElementById('mainCustomerDashboard');
    
    // The secret passcode required to gain entrance
    const SECRET_PASSCODE = "1721"; 

    inputs.forEach((input, index) => {
        // Automatically jump cursor focus to next box when a digit is entered
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
            checkFullPasscode();
        });

        // Handle backspace mechanics naturally
        input.addEventListener('keydown', (e) => {
            if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    function checkFullPasscode() {
        // Combine all 4 input fields into a single string
        let typedCode = "";
        inputs.forEach(input => typedCode += input.value);

        // Once exactly 4 items are filled out, verify validation matching
        if (typedCode.length === 4) {
            if (typedCode === SECRET_PASSCODE) {
                alert('Access Granted! Welcome to CitySuper Market SL Premium.');
                
                // Unveil the layout panels seamlessly
                gateCard.style.display = "none";
                dashboardCard.style.display = "block";
            } else {
                alert('Incorrect Passcode. Access Denied. Try again!');
                // Wipe fields for a fresh re-entry attempt
                inputs.forEach(input => input.value = "");
                inputs[0].focus();
            }
        }
    }
});