document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    for (let i = 1; i <= 695; i++) {
        const img = document.createElement('img');
        img.src = `sprite/image (${i}).gif`;
        img.addEventListener('click', function() {
            loadSingleImage(this.src);
        });
        container.appendChild(img);
    }

    const returnButton = document.createElement('a');
    returnButton.textContent = 'Return';
    returnButton.className = 'pixel-button';
    returnButton.href = 'index.html';
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

    const returnButton = document.createElement('a');
    returnButton.textContent = 'Return to Gallery';
    returnButton.className = 'pixel-button';
    returnButton.href = 'pkmngallery.html';
    container.appendChild(returnButton);
}
