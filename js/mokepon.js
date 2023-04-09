/*CreateElement es para crear un elemento HTML dentro de JAVASCRIPT */
/*InnerHTML es para modificar un elemento de HTML en JAVASCRIPT */
/*appendChild permite utilizar elementos creados en JAVASCRIPT y insertarlos en HTML */
/*disabled es para desactivar botones */

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
  );
  sectionSeleccionarMascota.style.display = "none";

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";

  let inputMichu = document.getElementById("michu");
  let inputFirulais = document.getElementById("firulais");
  let inputManchas = document.getElementById("manchas");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputMichu.checked) {
    spanMascotaJugador.innerHTML = "Michu 🐈‍⬛";
  } else if (inputFirulais.checked) {
    spanMascotaJugador.innerHTML = "Firulais 🐶";
  } else if (inputManchas.checked) {
    spanMascotaJugador.innerHTML = "Manchas 🐮";
  } else {
    alert("Debes seleccionar una mascota 😊");
    sectionSeleccionarMascota.style.display = "block";
    sectionSeleccionarAtaque.style.display = "none";
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAletoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAletoria == 1) {
    spanMascotaEnemigo.innerHTML = "Michu 🐈‍⬛";
  } else if (mascotaAletoria == 2) {
    spanMascotaEnemigo.innerHTML = "Firulais 🐶";
  } else {
    spanMascotaEnemigo.innerHTML = "Manchas 🐮";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA 💧";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 😒");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, perdiste😕");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! ganaste 😁");
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("resultado");
  let ataquesDelJugador = document.getElementById("ataques-del-jugador");
  let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado");

  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
