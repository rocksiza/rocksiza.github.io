document.querySelector('#psychedelic-button').addEventListener('click', function() {
    // Get body element
    var body = document.querySelector('body');
    
    // Check if body already has the class
    if (body.classList.contains('psychedelic')) {
        // If it does, remove it
        body.classList.remove('psychedelic');
    } else {
        // If it doesn't, add it
        body.classList.add('psychedelic');
    }
});
