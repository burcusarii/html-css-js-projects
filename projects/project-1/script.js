const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
let width = 0;
let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  width += 33;
  progress.style.width = width + "%";
  console.log(width);
  update();
});

prev.addEventListener("click", function () {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  width -= 33;
  progress.style.width = width + "%";
  console.log(width);

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
      
    } else {
      circle.classList.remove("active");
    }
  });

  if(currentActive == 1) {
    prev.disabled =true;
  }

  else if(currentActive == circles.length) {
    next.disabled = true;
  }

  else {
    prev.disabled = false;
    next.disabled = false;
  }
}