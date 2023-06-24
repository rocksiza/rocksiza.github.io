document.querySelector('.pixel-button').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    for(let i = 1; i <= 325; i++) { // Assuming you have 10 images in the directory.
        const img = document.createElement('img');
        img.src = `raveflyers/image (${i}).jpg`; // Update this according to your image file names.
        container.appendChild(img);
    }
});
