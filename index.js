/* Abrir y cerrar menu */
 function openMenu() {
  document.getElementById('menu').classList.add('show_menu');
  document.getElementById('btnabrir').classList.add('hidden');
}

function closeMenu() {
  document.getElementById('menu').classList.remove('show_menu');
  document.getElementById('btnabrir').classList.remove('hidden');
}




function changeLanguage (){
  const ENG = document.querySelector(".btn_languages")
  const ESP = document.querySelector(".btn_language")

  ENG.classList.toggle("hidden")
  ESP.classList.toggle("hidden")
}
