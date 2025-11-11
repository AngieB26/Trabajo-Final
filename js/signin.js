const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  if (isPassword) {
    passwordInput.type = 'text';
    togglePassword.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    togglePassword.textContent = '👁️';
  }
});
