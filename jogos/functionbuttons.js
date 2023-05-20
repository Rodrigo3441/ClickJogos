var zoom = 100;
var minZoom = 90;
var maxZoom = 190;
var originalZoom = 100;

document.getElementById("zoom-in").addEventListener("click", function(){
    zoom += 10;
    document.body.style.zoom = zoom + "%";
    if (zoom >= maxZoom) {
        document.getElementById("zoom-in").classList.add("disabled");
    } else {
        document.getElementById("zoom-in").classList.remove("disabled");
        document.getElementById("zoom-out").classList.remove("disabled");
    }
    if(zoom !== originalZoom) {
        document.getElementById("reset-zoom").classList.remove("disabled");
    } else {
        document.getElementById("reset-zoom").classList.add("disabled");
    }
});

document.getElementById("zoom-out").addEventListener("click", function(){
    zoom -= 10;
    document.body.style.zoom = zoom + "%";
    if (zoom <= minZoom) {
        document.getElementById("zoom-out").classList.add("disabled");
    } else {
        document.getElementById("zoom-in").classList.remove("disabled");
        document.getElementById("zoom-out").classList.remove("disabled");
    }
    if(zoom !== originalZoom) {
        document.getElementById("reset-zoom").classList.remove("disabled");
    } else {
        document.getElementById("reset-zoom").classList.add("disabled");
    }
});

document.getElementById("reset-zoom").addEventListener("click", function(){
    zoom = originalZoom;
    document.body.style.zoom = zoom + "%";
    document.getElementById("zoom-in").classList.remove("disabled");
    document.getElementById("zoom-out").classList.remove("disabled");
    document.getElementById("reset-zoom").classList.add("disabled");
});

var fullscreenBtn = document.getElementById("fullscreen-btn");
fullscreenBtn.addEventListener("click", toggleFullscreen);
function toggleFullscreen() {
  var doc = document.documentElement;
  if (!document.fullscreenElement) {
    doc.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
setTimeout(function() {
        document.getElementById("loadingimg").src = "../pageelements/error.gif";
        document.getElementById("loadingtxt").innerHTML = "Falha ao carregar dados";
      }, 10000); // 10 segundos em milissegundos
	   setTimeout(function() {
        document.getElementById("loadingimg1").src = "../pageelements/error.gif";
        document.getElementById("loadingtxt1").innerHTML = "Falha ao carregar dados";
      }, 10000); // 10 segundos em milissegundos