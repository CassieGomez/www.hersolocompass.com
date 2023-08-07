var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Adjust the interval duration as desired

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}
