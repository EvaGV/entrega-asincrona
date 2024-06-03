
// script.js
var A_songs = [
    {
        "title": "Título 1",
        "time": "03:22",
        "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "artist": "Artista 1"
    },
    {
        "title": "Título 2",
        "time": "04:05",
        "audio": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "artist": "Artista 2"
    }
    // ... otros temas ...
];

var currentSongIndex = 0;
var audioElement = document.getElementById('audio');
var titleElement = document.getElementById('txt_title');
var timeElement = document.getElementById('txt_time');
var progressElement = document.getElementById('progress');
var playlistElement = document.getElementById('playlist');
var isPlaying = false;

function loadSong(index) {
    var song = A_songs[index];
    audioElement.src = song.audio;
    titleElement.textContent = song.title;
    timeElement.textContent = song.time;
    if (isPlaying) {
        audioElement.play();
    }
}

function prevItem() {
    currentSongIndex = (currentSongIndex - 1 + A_songs.length) % A_songs.length;
    loadSong(currentSongIndex);
}

function nextItem() {
    currentSongIndex = (currentSongIndex + 1) % A_songs.length;
    loadSong(currentSongIndex);
}

function togglePlayPause() {
    if (audioElement.paused) {
        audioElement.play();
        isPlaying = true;
    } else {
        audioElement.pause();
        isPlaying = false;
    }
}

audioElement.addEventListener('timeupdate', function() {
    var currentTime = audioElement.currentTime;
    var duration = audioElement.duration;
    if (duration > 0) {
        var percentage = (currentTime / duration) * 100;
        progressElement.style.width = percentage + '%';
    }
});

A_songs.forEach((song, index) => {
    var li = document.createElement('li');
    li.textContent = song.title + " - " + song.artist;
    li.onclick = function() {
        currentSongIndex = index;
        loadSong(index);
        if (isPlaying) {
            audioElement.play();
        }
    };
    playlistElement.appendChild(li);
});

loadSong(currentSongIndex);
