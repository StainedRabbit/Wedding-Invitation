const captions = [
  "Save the Date – Our Beginning"
];

let index = 0;
const slides = document.querySelectorAll(".slide");
const captionEl = document.getElementById("caption");

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  captionEl.textContent = captions[i];
}

// example autoplay
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);