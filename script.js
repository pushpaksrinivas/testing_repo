// Carousel Functionality
let currentIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselContainer = document.querySelector('.carousel-images');
const totalImages = carouselImages.length;

function showCarouselImage(index) {
    const offset = -index * 100;
    carouselContainer.style.transition = 'transform 1.0s ease-in-out';
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    showCarouselImage(currentIndex);
}, 4000);
