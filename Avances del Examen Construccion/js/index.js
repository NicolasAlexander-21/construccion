let menu_abrir = document.getElementById("menu-hamburger"),
  lista_menu = document.getElementById("lista-menu"),
  boton_abrir = document.getElementById("menu-hamburger-abrir");
  boton_cerrar = document.getElementById("menu-hamburger-cerrar");

boton_abrir.addEventListener(`click`, function () {
  lista_menu.classList.add("activar");
  boton_abrir.classList.add("activar");
  boton_cerrar.classList.add("activar");
});
boton_cerrar.addEventListener(`click`, function () {
  lista_menu.classList.remove("activar");
  boton_abrir.classList.remove("activar");
  boton_cerrar.classList.remove("activar");
});
