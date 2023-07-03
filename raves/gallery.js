document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    for(let i = 1; i <= 351; i++) {
        const img = document.createElement('img');
        img.src = `raveflyers/image (${i}).jpg`;
        img.addEventListener('click', function() {
            loadSingleImage(this.src);
        });
        container.appendChild(img);
    }

    const returnButton = document.createElement('a');
    returnButton.textContent = 'Return';
    returnButton.className = 'pixel-button';
    returnButton.href = '../galleryHome.html';
    container.appendChild(returnButton);
});

function loadSingleImage(src) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = src;
    img.style.width = 'auto';
    img.style.height = 'auto';
    container.appendChild(img);

    const returnToGalleryButton = document.createElement('a');
    returnToGalleryButton.textContent = 'Return to Gallery';
    returnToGalleryButton.className = 'pixel-button';
    returnToGalleryButton.href = 'gallery.html';
    container.appendChild(returnToGalleryButton);

    const returnToMainButton = document.createElement('a');
    returnToMainButton.textContent = 'Return to Main Page';
    returnToMainButton.className = 'pixel-button';
    returnToMainButton.href = '../galleryHome.html'; // Adjust this link to point to your main page.
    container.appendChild(returnToMainButton);
}