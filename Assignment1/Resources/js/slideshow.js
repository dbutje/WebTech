var slideI = 1;
showSlide(slideI);

// Next/previous controls
function nextSlide(n) {
  showSlide(slideI += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideI = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("circle");
  if (n > slides.length) {slideI = 1} 
  if (n < 1) {slideI = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideI-1].style.display = "block"; 
  dots[slideI-1].className += " active";
}