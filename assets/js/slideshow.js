let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = Array.from(document.getElementsByClassName("mySlides"));
  const dots = Array.from(document.getElementsByClassName("dot"));

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace(" active", "");
  });

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}