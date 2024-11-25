let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Increment slides to show each slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // resets to the first sldie
    }

    // displays the current slide
    slides[slideIndex - 1].style.display = "block";

    // change slide every 3s
    setTimeout(showSlides, 3000);
}