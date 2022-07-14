  function abrirPopUp(){
  var overlay= document.getElementById('overlay');
  overlay.classList.remove('no-mostrar');
}

function cerrarPopUp(){
  var overlay=document.getElementById('overlay');
  overlay.classList.add('no-mostrar');
}

function abrirPlaca(){
var placa= document.getElementById('placa');
placa.classList.remove('no-mostrar');
}


function cerrarPlaca(){
  var placa=document.getElementById('placa');
  placa.classList.add('no-mostrar');
  resetearPlaca();
}

function resetearPlaca(){
  var inputPlaca=document.getElementById("botonPlaca");
  inputPlaca.value="";
}
/*
function abrirModerador(){
 var overlay=document.getElementById('moderador');
 var seccionPlaca=document.getElementById('placa');
 seccionPlaca.classList.add("no-mostrar");
 overlay.classList.remove("no-mostrar");
}

function cerrarModerador(){
  var placa=document.getElementById('moderador');
  moderador.classList.add('no-mostrar');
}
*/
