const intervalo = 5000;

function slider() {
    let valorImg = Math.floor(Math.random() * 4);

    if(valorImg == 0) {
        valorImg = 1;
    }

    document.querySelector('.selected').src = `../assets/movies/img_slider_${valorImg}.svg`;
    console.log(valorImg)
}

function start() {
    setInterval(() => {
        slider();
    }, intervalo);
}

window.addEventListener('load', start());
    










