//Nos aseguramos de cargar el DOM lo primero 

document.addEventListener('DOMContentLoaded', () => {

    const mainImage = document.getElementById('image');
    const containerLightbox = document.getElementById('containerLightbox');
    const imageLightbox = document.getElementById('imageLightbox');
    const imageClose = document.getElementById('imageClose');

    //Accedemos a la propiedad src sin utilizar setAttribute o getAttribute

    mainImage.addEventListener('click', () => {
        imageLightbox.src = mainImage.src;
        containerLightbox.style.display = 'block';
    });

    imageClose.addEventListener('click', () => {
        containerLightbox.style.display = 'none';
    });
});