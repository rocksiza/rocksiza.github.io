const images = ["raids/ron.jpg", "raids/kf.jpg", "raids/vow.jpg", "raids/vog.jpg", "raids/dsc.jpg", "raids/gos.jpg", "raids/lw.jpg"];
const labels = [
    ["Day One"],
    ["Day One"],
    ["Trio", "Contest"],
    ["Flawless Trio"],
    ["Flawless", "Trio", "Day One"],
    ["Flawless", "Duo"],
    ["Flawless", "Solo"]
    // add more label arrays as needed
];

const timelabels = [
    ["0:00"],
    ["0:00"],
    ["0:00"],
    ["0:00"],
    ["0:01"],
    ["0:00"],
    ["0:00"]
    
    // add more label arrays as needed
];

const backgrounds = ["waves/ron.png", "waves/kf.png", "waves/vow.png", "waves/vog.png", "waves/dsc.png", "waves/gos.png", "waves/lw.png"];
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
    document.body.style.backgroundImage = `url(${backgrounds[index]})`;

    let labelBox = document.getElementById('label-box');
    labelBox.innerHTML = '';  // Clear out the current labels

    let timelabelBox = document.getElementById('time-label-box');
    timelabelBox.innerHTML = '';  // Clear out the current labels

    for (let label of labels[index]) {
        let button = document.createElement('button');
        button.innerText = label;
        button.className = 'label-button';
        labelBox.appendChild(button);
    }

    for (let label of timelabels[index]) {
        let button = document.createElement('button');
        button.innerText = label;
        button.className = 'timelabel-button';
        timelabelBox.appendChild(button);
    }
}

updateContent();

document.getElementById('back-button').onclick = function() {
    window.location.href = 'index.html';
};

