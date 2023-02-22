const cards = document.querySelectorAll(".card");


for(let card of cards) {
    card.addEventListener("click", function() {
        removeActive();
        card.classList.add("active");
    })
}

function removeActive() {
    for(let card of cards) {
            card.classList.remove("active");
    }
}