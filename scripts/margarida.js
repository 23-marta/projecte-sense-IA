var currentImageIndex = 0;
var images = document.getElementsByClassName("gallery-img");

function changeImage(direction) {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex += direction;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    images[currentImageIndex].classList.add("active");
}