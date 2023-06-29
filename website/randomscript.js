window.addEventListener('DOMContentLoaded', function() {
  var backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg']; // Add the file names of your background images
  var randomIndex = Math.floor(Math.random() * backgrounds.length);
  var randomImage = backgrounds[randomIndex];
  document.body.style.backgroundImage = 'url(' + randomImage + ')';
});
