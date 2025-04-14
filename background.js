const backgrounds = [
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg',
    '../img/5.jpg',
    '../img/6.jpg',
    '../img/7.jpg',
    '../img/8.jpg',
    '../img/9.jpg',
    '../img/10.jpg'
]

function aleatorio () {
    const imagenRandom = backgrounds[Math.floor(Math.random()* backgrounds.length)];
    document.body.style.backgroundImage = `url("${imagenRandom}")`
}

aleatorio();

setInterval(aleatorio, 15000);