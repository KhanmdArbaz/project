const images = ["https://thumbs.dreamstime.com/b/planet-earth-space-night-some-elements-image-furnished-nasa-52734504.jpg ",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLkMyN13YZU2HwPFeXTiFK5JorHLawp3M4jSHYvJAPOEeYvjzQGbbHgM&s",
"https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg"
]
let currentIndex = 0;
window.onload = function () {
document.getElementById("image").src = images [currentIndex];
};
function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
document.getElementById("image").src = images [currentIndex];
};
function prevImage() {
currentIndex = (currentIndex-1 + images.length) % images.length;};