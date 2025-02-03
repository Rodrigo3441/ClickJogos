document.addEventListener("DOMContentLoaded", function () {
    const flashObject = document.getElementById("flash-object");
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");
    const resetZoomBtn = document.getElementById("reset-zoom");
    const scaleFactor = 1.1;

    // Pegar os valores iniciais REAIS do tamanho do objeto
    const initialWidth = flashObject.getAttribute("width");
    const initialHeight = flashObject.getAttribute("height");

    function resizeObject(scale) {
        let currentWidth = flashObject.offsetWidth;
        let currentHeight = flashObject.offsetHeight;

        flashObject.style.width = Math.round(currentWidth * scale) + "px";
        flashObject.style.height = Math.round(currentHeight * scale) + "px";

        checkResetButton();
    }

    function resetSize() {
        flashObject.style.width = initialWidth + "px";
        flashObject.style.height = initialHeight + "px";
        checkResetButton();
    }

    function checkResetButton() {
        if (flashObject.offsetWidth == initialWidth && flashObject.offsetHeight == initialHeight) {
            resetZoomBtn.style.display = "none";
        } else {
            resetZoomBtn.style.display = "inline";
        }
    }

    zoomInBtn.addEventListener("click", function () {
        resizeObject(scaleFactor);
    });

    zoomOutBtn.addEventListener("click", function () {
        resizeObject(1 / scaleFactor);
    });

    resetZoomBtn.addEventListener("click", function () {
        resetSize();
    });

    resetZoomBtn.style.display = "none"; // Esconder o botão no início
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