const search_btn = document.querySelector(".search-btn");
const search_input = document.querySelector(".input");

search_btn.addEventListener("click", function() {

    if(search_input.classList.contains("active")) {
        search_input.classList.remove("active");
    }
    else {
        search_input.classList.add("active");

    }
})