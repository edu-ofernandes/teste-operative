let btnMenu = document.getElementsByClassName('menu-mobile')
btnMenu[0].addEventListener('click', toggleMenu)
function toggleMenu(data) {
  let nav = document.querySelector('.nav')
  nav.classList.toggle('active')
}