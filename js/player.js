/* prendre les éléments */
  var player = document.querySelector('.player');
  var video = document.querySelector('.viewer');
  var progress = document.querySelector('.progress');
  var progressBar = document.querySelector('.progress__filled');
  var toggle = document.querySelector('.toggle');
  var stop = document.querySelector('.stop');
  var volume = document.querySelector('.player__slider');
/* Construire les fonctions */

function togglePlay() {

  if (video.paused) {
    video.play();
    console.log('playing');
  }else{
    video.pause();
    console.log('paused');
  }
}

function updateButton() {

  if (this.paused) {
    toggle.textContent = '▶';
  }else{
    toggle.textContent = '▌▌';
  }

  /* autre synthaxe plus légère mais moins simple

    var icon = this.paused ? '▶' : '▌▌';
    console.log(icon);
    toggle.textContent = icon;
  */
}


function stop() {
  video.pause();
   video.currentTime = 0;

}
function handleRangeUpdate() {
  // fonction du volume
  console.log(this.value);

}

function handleProgress() {
  var percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`;
  //console.log(percent);
}
function scrub(e) {
  var scrubTime = (e.offsetX / progress.offsetWidth)* video.duration;
  video.currentTime = scrubTime;
}
/* Accrocher les events listener */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

stop.addEventListener('click', stop);


toggle.addEventListener('click', togglePlay);
//skipButtons.forEach(button => button.addEventListener('click', skip));

volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
