function playSong(songPath) {
  const player = document.getElementById('audioPlayer');
  player.src = songPath;
  player.play();
}
