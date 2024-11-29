document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const password = document.getElementById('password');
    const forms = document.getElementById('forms');
    const errorElement = document.getElementById('error');

    forms.addEventListener('submit', (e) => {
        let messages = [];

        if (nameInput.value.trim() === '' || nameInput.value == null) {
            messages.push('Name is required');
        }

        if (password.value.trim() === '') {
            messages.push('Password is required');
        } else {
            if (password.value.length < 6) {
                messages.push('Password must be at least 6 characters');
            }
            if (!/[A-Z]/.test(password.value)) {
                messages.push('Password must contain at least one uppercase letter');
            }
            if (!/[0-9]/.test(password.value)) {
                messages.push('Password must contain at least one number');
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
                messages.push('Password must contain at least one special character');
            }
        }

        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerHTML = messages.join('<br>');
            errorElement.style.color = 'red';
        }
    });
});
