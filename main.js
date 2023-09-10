const themeSelector = document.getElementById('selector');
const root = document.documentElement;
const themeName = document.querySelector('.theme-name');



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

themeSelector.addEventListener('click', () => { 
  setTheme();
  changeThemeName();
});

window.onload = () => {
  root.className = 'light';
}