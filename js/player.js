/* prendre les éléments */
  const player = document.querySelector('.player');
  const video = document.querySelector('.viewer');
  const progress = document.querySelector('.progress');
  const progressBar = document.querySelector('.progress__filled');
  const toggle = document.querySelector('.toggle');
  const skipButtons = player.querySelectorAll('[Data-skip]');
  const ranges = player.querySelectorAll('.player__slider');

/* Construire les fonctions */
function togglePlay(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}
/* Accrocher les evetns listener */
