function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function validateForm() {
    let x = document.forms["myForm"]["fullname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
        alert("Email Address must be filled out");
        return false;
    }
    let z = document.forms["myForm"]["content"].value;
    if (z == "") {
        alert("You forgot to give your feedback.  Try again!");
        return false;
    }
}

function openForm() {
    document.getElementById("stickyForm").style.display = "block";
}

function closeForm() {
    document.getElementById("stickyForm").style.display = "none";
}