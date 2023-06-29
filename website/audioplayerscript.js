let audioFiles = ["unknown.mp3"];
    let audioPlayer;
    let playButton = document.getElementById('playButton');
    let pauseButton = document.getElementById('pauseButton');

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function loadNextSong() {
        if (audioFiles.length > 0) {
            let nextSong = audioFiles.pop();
            audioPlayer.src = nextSong;
        }
    }

    window.onload = function() {
        audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.addEventListener('ended', loadNextSong);

        shuffle(audioFiles);
        loadNextSong();
    }

    playButton.addEventListener('click', function() {
      audioPlayer.play();
    });

    pauseButton.addEventListener('click', function() {
      audioPlayer.pause();
    });