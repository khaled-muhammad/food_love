let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const track = document.querySelector('.carousel-track');

// Function to update the slide position
function updateSlidePosition() {
    const offset = -currentSlide * 100; // Calculate offset in percentage
    track.style.transform = `translateX(${offset}%)`; // Move the track left by offset
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop to the first slide after the last
    updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to the last slide if at the start
    updateSlidePosition();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initial setup
updateSlidePosition();
