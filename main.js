const themeSelector = document.getElementById('selector');
const root = document.documentElement;
const themeName = document.querySelector('.theme-name');
const password = document.getElementById('password');
const errorPassword = document.getElementById('password').nextElementSibling;
const verifyPassword = document.getElementById('verify-password');
const errorVerifyPassword = document.getElementById('verify-password').nextElementSibling;
const formInputs = document.querySelectorAll('.input');
const submitButton = document.querySelector('.form-button>button');



/**
 * Sets the theme of the application.
 */
function setTheme() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}

/**
 * Updates the theme name based on the current theme class.
 */
function changeThemeName() {
  const newName = root.className === 'light' ? 'Light' : 'Dark';
  themeName.textContent = newName;
}

function checkPasswords() {
  const comparePasswords = () => {
    if (password.value !== verifyPassword.value) {
      errorVerifyPassword.textContent = '*Password do not match';
      verifyPassword.classList.add('error');
    } else {
      if (verifyPassword.classList.contains('error')) {
        errorVerifyPassword.textContent = '';
        verifyPassword.classList.remove('error');
      }
    }
  }

  const validatePasswords = () => {
    if (password.textContent.length < 6) {
      errorPassword.textContent = '*Password must be at least 6 characters';
      password.classList.add('error');
    } else {
      if (password.classList.contains('error')) {
        errorPassword.textContent = '';
        password.classList.remove('error');
      }
    }
  }

  validatePasswords();
  comparePasswords();
}

themeSelector.addEventListener('click', () => { 
  setTheme();
  changeThemeName();
});

submitButton.addEventListener('click', (e) => {
  checkPasswords();
})

window.onload = () => {
  root.className = 'dark';
}

