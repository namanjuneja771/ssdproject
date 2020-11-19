function sleep(milliseconds,slideIndex) {
  var date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
    slides[slideIndex-1].style.display = "block";	
  } while (currentDate - date < milliseconds);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    if(slideIndex!=i)
    slides[i].style.display = "none";
  }
  var prev=slideIndex;
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  //slides[prev].style.display = "none";
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides,7000); // Change image every 7 seconds
}
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
