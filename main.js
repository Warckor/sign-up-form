const themeSelector = document.getElementById('selector');
const root = document.documentElement;
const themeName = document.querySelector('.theme-name');
const password = document.getElementById('password');
const errorPassword = document.getElementById('password').nextElementSibling;
const verifyPassword = document.getElementById('verify-password');
const errorVerifyPassword = document.getElementById('verify-password').nextElementSibling;
const formInputFields = document.querySelectorAll('.field');
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

/**
 * Checks if passwords match and validates their length.
 */
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
    if (password.value.length < 6) {
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

function checkEmptyInputs () {
  formInputFields.forEach((input) => {
    if (input.value.length === 0) {
      input.classList.add('error');
      input.nextElementSibling.textContent = '*This field is required';
    } else {
      if (input.classList.contains('error')) {
        input.classList.remove('error');
        input.nextElementSibling.textContent = '';
      }
    }
  });
}

themeSelector.addEventListener('click', () => { 
  setTheme();
  changeThemeName();
});

submitButton.addEventListener('click', (e) => {
  checkEmptyInputs();
  checkPasswords();
})

window.onload = () => {
  root.className = 'dark';
}
