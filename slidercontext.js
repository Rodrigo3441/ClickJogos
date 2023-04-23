var slideIndex = 1;

function mostrarSlide(n) {
  var slides = document.getElementsByClassName("slider-content");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + (slideIndex - 1) * 100 + "%)";
  }
}

function anterior() {
  mostrarSlide(slideIndex -= 1);
}

function proximo() {
  mostrarSlide(slideIndex += 1);
}

mostrarSlide(slideIndex);
