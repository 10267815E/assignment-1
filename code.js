//slideshow new code

(function() {             // function is wrapped in an immediately invoked function expression (IIFE) so that it runs the moment user opens the home page
  let slideIndex = 0;   //initialise slide index to 0

  function showSlides() {
      let slides = document.getElementsByClassName("mySlides"); //obtain all elements with the "myslides" class, which in this case, are the 3 images 
      let dots = document.getElementsByClassName("dot");  //same idea here with the dots showing which image it is currently showing

      for (let i = 0; i < slides.length; i++) {    //hides all the images
          slides[i].style.display = "none";  
      }

      slideIndex++;   //increment to keep changing to the following slide
      if (slideIndex > slides.length) {slideIndex = 1} //when slides go to the final slide (slide 3), it resets to the first slide

      for (let i = 0; i < dots.length; i++) {     //removes the active class to all dots to sync which slide it is currently on
          dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex-1].style.display = "block";  //displays curret sldie by changing the display to "block"
      dots[slideIndex-1].className += " active";  //code to highlight the current slide's dot, by changing it to "active"

      setTimeout(showSlides, 2000); // Change image every 2 seconds
  }

  // Start slideshow
  showSlides();
})();

