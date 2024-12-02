document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');
    const forms = document.getElementById('forms');
    const errorElement = document.getElementById('error');

    phone.addEventListener('input', (e) => {
        phone.value = phone.value.replace(/[^0-9]/g, '');
    });

    forms.addEventListener('submit', (e) => {
        let messages = [];

        if (nameInput.value.trim() === '') {
            messages.push('Name is required');
        } else if (!/^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(nameInput.value.trim())) {
            messages.push('Each word in the name must start with an uppercase letter');
        }

        if (email.value.trim() === '') {
            messages.push('Email is required');
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email.value.trim())) {
            messages.push('Only Gmail IDs are allowed');
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
            if (/\s/.test(password.value)) {
                messages.push('Password must not contain spaces');
            }
        }

        if (phone.value.trim() === '') {
            messages.push('Phone number is required');
        } else if (!/^\d{10}$/.test(phone.value.trim())) {
            messages.push('Phone number must be exactly 10 digits');
        }

        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerHTML = messages.join('<br>');
            errorElement.style.color = 'red';
        }
    });
});
