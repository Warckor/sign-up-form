const themeSelector = document.getElementById('selector');
const root = document.documentElement;
const themeName = document.querySelector('.theme-name');



function setTheme() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}

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