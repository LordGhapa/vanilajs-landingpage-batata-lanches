import AOS from 'aos'
import 'aos/dist/aos.css'

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100
})

const menuMobile = document.querySelector('.header__menu-mobile')
const mobileShowIcon = document.querySelector('.header__menu-mobile-icon')
const mobileLi = document.querySelectorAll('.header__menu-mobile a,.close-icon')

function hiddenMobileMenu() {
  menuMobile.classList.add('hidden')
}
function showMobileMenu() {
  menuMobile.classList.remove('hidden')
}

mobileShowIcon.addEventListener('click', showMobileMenu)
mobileLi.forEach(li => {
    li.addEventListener('click', hiddenMobileMenu);
  });


