document.getElementById('animationButton').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('animatedImage').style.right = '20px';
  setTimeout(function() {
    document.getElementById('speechBubble').style.display = 'block';
  }, 2000);
});

document.getElementById('overlay').addEventListener('click', function(event) {
  if (event.target.id == 'overlay') {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('animatedImage').style.right = '-500px';
    document.getElementById('speechBubble').style.display = 'none';
  }
});
