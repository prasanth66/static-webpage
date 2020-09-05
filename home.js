
// code for sliding
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// code for image pop
function openModal() {
  document.getElementById("myModal").style.display = "block";

}

function closeModal() {
  document.getElementById("myModal").style.display = "none";

}

var slidenum = 1;
showphotoSlides(slidenum);

function plusSlides(n) {
  showphotoSlides(slidenum += n);
}

function currentSlide(n) {
  showphotoSlides(slidenum = n);
 
}

function showphotoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  
 
  if (n > slides.length) {slidenum = 1}
  if (n < 1) {slidenum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slidenum-1].style.display = "block";
  

}

// code for videopop and play

function openvideo() {
  document.getElementById("myModalvideo").style.display = "block";
 
}

function videocloseModal() {
  document.getElementById("myModalvideo").style.display = "none";
pausvideo();
}

var slidevideo = 1;
showvideoSlides(slidevideo);

function videoplusSlides(n) {
  showvideoSlides(slidevideo += n);
  pausvideo();

}

function currentvideo(n) {
  showvideoSlides(slidevideo = n);
  pausvideo();
 
}

function showvideoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("videoslides");
  pausvideo();
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slidevideo = 1}
  if (n < 1) {slidevideo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slidevideo-1].style.display = "block";
  
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


function pausvideo(){
  var videoList = document.getElementsByTagName("video");
for (var i = 0; i < videoList.length; i++) {
    videoList[i].pause();
}
}