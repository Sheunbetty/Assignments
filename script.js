
let slideIndex = 1;
displaySlides(slideIndex);

// Next/previous controls
function addSlides(n) {
  displaySlides(slideIndex += n);
}

// Thumbnail image controls
function presentSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  let j;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
