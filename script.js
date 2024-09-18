const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;
const cardWidth = document.querySelector('.instructor-card').offsetWidth + 20; // Width + margin
const visibleCards = Math.floor(document.querySelector('.carousel-container').offsetWidth / cardWidth);

nextBtn.addEventListener('click', () => {
    const maxScroll = (carousel.children.length - visibleCards) * cardWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
