const slider = document.getElementById("slider");

let currentSlide = 0;

function moveSlide(direction) {

  const boxes = document.querySelectorAll(".box");

  const boxWidth = 280; // box width + gap

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = 0;
  }

  if (currentSlide > boxes.length - 2) {
    currentSlide = boxes.length - 2;
  }

  slider.style.transform =
    `translateX(-${currentSlide * boxWidth}px)`;
}
