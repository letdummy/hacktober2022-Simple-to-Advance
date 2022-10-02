const menu = document.querySelector('.mobile-menu');
const cut = document.getElementById('mobile-exit');
const exitCont = document.querySelector('.exit-holder');
const navigation = document.querySelector('nav');
menu.addEventListener('click', function () {
  navigation.classList.add('menu-btn');
  cut.classList.remove('hidden');
  exitCont.style.display = 'block';
});
cut.addEventListener('click', function () {
  navigation.classList.remove('menu-btn');

  exitCont.classList.add('hidden');
});
AOS.init({
  offset: 200,
  delay: 100,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorePlacement: 'top-bottom',
});
