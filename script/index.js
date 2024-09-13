/* ********************************* MENU ********************************* */
const menu = document.getElementById('menu')
const nav = document.querySelector('.nav')
const links = nav.querySelectorAll('.menu__link')


nav.addEventListener('click', function (event) {
  if (event.target.closest('#btnAbrir')) {
    menu.classList.add('show_menu')
  }
  if (event.target.closest('#btnAbrir')) {
    btnAbrir.classList.add('hidden')
  }
  if (event.target.closest('#btnCerrar')) {
    menu.classList.remove('show_menu')
  }
  if (event.target.closest('#btnCerrar')) {
    btnAbrir.classList.remove('hidden')
  }
  if (event.target.closest('.menu__link')) {
    menu.classList.remove('show_menu')

  if (event.target.closest('.menu__link')) {
    btnAbrir.classList.remove('hidden')
  }

    for (const link of links) {
      link.classList.remove('activo')
    }
    event.target.classList.add('activo')
  }
})
/* ********************************* MODOS ********************************* */
const btnMode = document.getElementById("btnMode")
const ls = window.localStorage
const body = document.body
const modo = ls.getItem("darkMode")
const imgMode = document.getElementById("imgMode");
const imglogo = document.getElementById("imglogo");

 if (modo) {
  body.classList.add('dark')
  imgMode.src = "img/noche.jpg";
  imglogo.src = "img/logo_dark.png"
} else {
  body.classList.remove('dark')
  imgMode.src = "img/dia.jpg"
  imglogo.src = "img/logo.png"
}
btnMode.addEventListener("click", function(){
  body.classList.toggle("dark") 

  if (body.classList.contains('dark')) {
    ls.setItem('darkMode', true)
    imgMode.src = "img/noche.jpg";
    imglogo.src = "img/logo_dark.png";
  } 
  else {
    ls.removeItem('darkMode')
    imgMode.src = "img/dia.jpg"
    imglogo.src = "img/logo.png"
    }
})
/* ********************************* TYPING ********************************* */
document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang;

  let strings;
  if (lang === 'en') {
    strings = ['Web Developer', 'Designer', 'Game Developer'];
  } else {
    strings = ['Desarrollador Web', 'Diseñador', 'Desarrollador de videojuegos'];
  }

  const typed = new Typed('#typing', {
    strings: strings,
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 25,
    loop: true,
    loopCount: Infinity,
    cursorChar: '/',
  });
});
