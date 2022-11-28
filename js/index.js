function abrirEtiquetaNO(){
    var overlay= document.getElementById('etiNo');
    overlay.classList.remove('no-mostrar');
  }

  function abrirEtiquetaSI(){
    var overlay= document.getElementById('etiSi');
    overlay.classList.remove('no-mostrar');
  }

  function abrirPopUpDefo(){
    var popUp= document.getElementById("popDefo");
    popUp.classList.remove("no-mostrar");
  }

function abrirPopupFrutos(){
    var popFrutos=document.getElementById("frutosPop");
    popFrutos.classList.remove("no-mostrar");
}

function abrirPopCN(){
  var popNormal=document.getElementById("cafeNormal");
  popNormal.classList.remove("no-mostrar");
}

function abrirPopCJ(){
  var popNormal=document.getElementById("cafeCJ");
  popNormal.classList.remove("no-mostrar");
}

function abrirPopOrg(){
  var popOrg= document.getElementById("popOrg");
  popOrg.classList.remove("no-mostrar");
}

function redirect_Page () {
  location.replace("../pantallas/Siembra.html");
   } 

setTimeout(redirect_Page, 5000);
    
 
  