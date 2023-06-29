// get the elements from the DOM
let showModal = document.getElementById('showModal');
let modalContainer = document.getElementById('modalContainer');
let modal = document.getElementById('modal');
let modalImage = document.getElementById('modalImage');
let overlay = document.getElementById('overlay'); // Get the overlay element
let features = [
    "superguy.gif",
    "superguy.gif"
    // add more images here...
];

showModal.addEventListener('click', () => {
    let index = Math.floor(Math.random() * features.length);
    modalImage.src = features[index];
    modalContainer.style.display = 'block';
    modalContainer.classList.add('active');
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
});

document.addEventListener('click', (event) => {
    if (event.target == modalContainer || event.target.id == 'overlay') {
        modalContainer.classList.remove('active');
        setTimeout(() => {
            modalContainer.style.display = 'none';
            let overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 500); // Wait for the animation to finish before hiding the modal
    }
});


