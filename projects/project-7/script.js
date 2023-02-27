const left = document.querySelector(".left.side");
const right = document.querySelector(".right.side");


left.addEventListener("mouseenter", function() {
    console.log("sol taraf frontend");
    left.classList.add("active");

})

left.addEventListener("mouseleave", function() {
    left.classList.remove("active");

})

right.addEventListener("mouseenter", function() {
    console.log("sağ taraf backend");
    right.classList.add("active");

})

right.addEventListener("mouseleave", function() {
    right.classList.remove("active");

})