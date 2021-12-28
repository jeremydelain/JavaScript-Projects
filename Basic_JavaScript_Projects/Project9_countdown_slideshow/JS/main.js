//basic timer
function countdown() {
    //get user input
    var seconds = document.getElementById("seconds").value;

    //counts user input down to 1 and displays an alert
    function tick() {
        seconds--;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == 1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


var slideIndex = 1;
showSlides(slideIndex);

//next and previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//cycles through as many images as there are in the html
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}