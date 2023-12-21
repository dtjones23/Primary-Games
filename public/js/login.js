const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log('hello login');
    if (email && password) {
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });
            // const data = await response.json();

            if (response.ok) {
                window.location.replace('/homepage'); // Redirects to homepage
            } else {
                alert('Failed to log in.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
};

const registerFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (email && password) {
        try {
            const response = await fetch('/api/user/register', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            // const data = await response.json();

            if (response.ok) {
                window.location.replace('/'); // Redirects to login page after successful registration
            } else {
                alert('Failed to create an account');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }
};

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);
document.querySelector('#registerForm').addEventListener('submit', registerFormHandler);
