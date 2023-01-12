let btnMenu = document.getElementById('open-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnMenu.classList.toggle('bi-x-lg');
})