function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
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
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAletoria = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

  if (mascotaAletoria == 1) {
    spanMascotaEnemigo.innerHTML = "Michu 🐈‍⬛";
  } else if (mascotaAletoria == 2) {
    spanMascotaEnemigo.innerHTML = "Firulais 🐶";
  } else {
    spanMascotaEnemigo.innerHTML = "Manchas 🐮";
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
