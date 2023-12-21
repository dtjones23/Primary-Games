const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password)
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();

      if (response.ok) {
        window.location.replace('/homepage'); // Redirects to homepage
      } else {
        alert('Failed to log in');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);

