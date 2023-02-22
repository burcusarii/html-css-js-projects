const loading_text = document.querySelector(".loading-text");
const bg = document.querySelector(".container");

let blur = 50;
let load = 0;


let blurFunction = setInterval(bluring, 200);
let loadFunction = setInterval(loading, 100);

function bluring() {
    blur--;

    if (blur < 0) {
        clearInterval(blurFunction);

    }

    bg.style.filter = `blur(${blur}px)`
}

function loading() {
    load++;

    if(load > 99) {
        clearInterval(loadFunction);
        loading_text.style.opacity = 0;
    }

    loading_text.innerText = load + "%";
}