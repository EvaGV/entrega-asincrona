// Paso 1: Declaramos las constantes
const botones = document.querySelectorAll('.botones');

const images = [
    './img/img1.webp',
    './img/img2.webp',
    './img/img3.webp',
    './img/img4.webp',
    './img/img5.webp',
    './img/img6.webp',
    './img/img7.webp',
    './img/img8.webp',
    './img/img9.webp',
    './img/img10.webp'
];

const backgroundImage = document.querySelector('.backgroundImage');

// Paso 2: Declaramos funciones
function changeBackground(index) {
    backgroundImage.style.opacity = 1; 
    backgroundImage.style.backgroundImage = `url(${images[index]})`;
}

botones.forEach((palabra, index) => {
    let isHovered = false;

    palabra.addEventListener('mouseover', () => {
        if (!isHovered) {
            isHovered = true;
            changeBackground(index);
        }
    });

    palabra.addEventListener('mouseout', () => {
        isHovered = false;
        backgroundImage.style.opacity = 0; 
    });
});