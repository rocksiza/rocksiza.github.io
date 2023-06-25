const images = ["raids/ron.jpg", "raids/kf.jpg", "raids/vow.jpg", "raids/vog.jpg", "raids/dsc.jpg", "raids/gos.jpg", "raids/lw.jpg"];
const texts = ["This is the text for image 1.", "This is the text for image 2.", "This is the text for image 3."];
const backgrounds = ["waves/ron.png", "waves/kf.png", "waves/vow.png", "waves/vog.png", "waves/dsc.png", "waves/gos.png", "waves/lw.png"]; // Update this array to use the URLs of your background images
let index = 0;

document.getElementById('prev-button').onclick = function() {
    index = index === 0 ? images.length - 1 : index - 1;
    updateContent();
};

document.getElementById('next-button').onclick = function() {
    index = index === images.length - 1 ? 0 : index + 1;
    updateContent();
};

function updateContent() {
    document.getElementById('main-image').src = images[index];
    document.getElementById('main-image').alt = `Image ${index + 1}`;
    document.getElementById('main-text').innerText = texts[index];
    document.body.style.backgroundImage = `url(${backgrounds[index]})`; // Use `background-image` and `url()` to set the background image
}