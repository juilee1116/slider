document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.querySelector(".slides");
    let slides = document.querySelectorAll(".slides .slide"); // Get all slide elements
    let SlideCounter = slides.length;
    let currentIndex = 0;

    function showSlider(index) {
        // Update currentIndex based on the provided index
        if (index >= SlideCounter) {
            currentIndex = 0; // Loop to the first image
        } else if (index < 0) {
            currentIndex = SlideCounter - 1; // Loop to the last image
        } else {
            currentIndex = index;
        }

        let offset = -currentIndex * 100; 
        console.log("Current index:", currentIndex, "Offset:", offset);

        sliders.style.transition = "transform 0.9s ease"; // Ensure smooth transition
        sliders.style.transform = `translateX(${offset}%)`; // Apply the translation
    }

    document.querySelector(".prevbtn").addEventListener('click', function() {
        currentIndex--; 
        showSlider(currentIndex); // Show the previous slide
    });

    document.querySelector(".nextbtn").addEventListener('click', function() {
        currentIndex++; 
        showSlider(currentIndex); // Show the next slide
    });

    showSlider(currentIndex); // Initial call to show the first slide
});