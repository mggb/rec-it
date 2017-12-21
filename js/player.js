/* viariables */
  var player = document.querySelector('.player');
  var video = document.querySelector('.viewer');
  var progress = document.querySelector('.progress');
  var progressBar = document.querySelector('.progress__filled');
  var toggle = document.querySelector('.toggle');
  var stop = document.querySelector('.stop');
  var volume = document.querySelector('.player__slider');
  var full_screen = document.querySelector('.full_screen');
  var soundIcon = document.querySelector('.volume_symbol');
  var time = document.querySelector('.video-duration-content');
  var big_btn = document.querySelector('.play_btn');
  var controls = document.querySelector('.player__controls');
  var player__modal = document.querySelector('.player_modal');
  var modal__overlay = document.querySelector('.overlay');
  var back_arrow = document.querySelector('.back_btn');
  var volume__control = document.querySelector('.volume_control');
  var muteIcon = document.getElementById('muteIcon');
  var unmuteIcon = document.getElementById('soundUpIcon');
  var fullScreenIcon = document.getElementById('fullScreen-icon');
  var regularScreenIcon = document.getElementById('regularScreen-icon');
  var save
  var timer




/* fonctions */

function togglePlay() {
  if (video.paused) {
    video.play();
    fadeControls();

  }else{
    video.pause();

  }

}

function updateButton() {

  if (this.paused) {
    toggle.textContent = '▶';
    big_btn.textContent = '▶';

  }else{
    toggle.textContent = '❙❙';

  }
}

function fadeControls(){

  if(video.paused){

    back_arrow.classList.remove('fade');
    controls.classList.remove('fade');
    big_btn.classList.remove('fade');


  }else{

    big_btn.classList.add('fade');
    menuTimer();

/*
    window.setTimeout(function(){
      back_arrow.classList.add('fade');
      controls.classList.add('fade');
      console.log('settimeout');
    }, 3000);
*/
menuTimer();
  }

}

function menuTimer (){
  timer = setTimeout(function(){

    back_arrow.classList.add('fade');
    controls.classList.add('fade');
    console.log('settimeout');
    stopTimer();
  }, 3000);
}
function stopTimer(){
  clearTimeout(timer);
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();

}


function handleRangeUpdate() {
  // fonction du volume
  console.log(video.volume);
  var value = this.value / 100;
  video.volume = value;
//  save = video.volume;

}

function handleProgress() {
  var percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`;
  //console.log(percent);
}

function scrub(e) {
  var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullScreen(){
  fullScreenIcon.classList.toggle('--none');
  regularScreenIcon.classList.toggle('--none');
  video.webkitRequestFullscreen();

}

function toggleModal() {
  stopVideo();
  player__modal.classList.toggle('--none');
}

function timer(){
  var chronoM = Math.floor(video.currentTime / 60);
  var chronoS = Math.floor(video.currentTime - 60 * chronoM);
  var total = video.duration;

  if (chronoS < 10){
    chronoS = "0" + chronoS;
  }

  time.textContent = chronoM + ":" + chronoS;
}



/* events listener */

video.addEventListener('click', function(){
  back_arrow.classList.toggle('fade');
  controls.classList.toggle('fade');
  big_btn.classList.toggle('fade');
  video.classList.toggle('--cursor_none');
  togglePlay();

});

big_btn.addEventListener('click', function(){
  this.classList.toggle('fade');
  back_arrow.classList.toggle('fade');
  controls.classList.toggle('fade');
  video.classList.toggle('--cursor_none');
  togglePlay();

});

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('timeupdate', timer);

stop.addEventListener('click', stopVideo);

toggle.addEventListener('click', togglePlay);

volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);

full_screen.addEventListener('click', toggleFullScreen);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);



player.addEventListener('mousemove', function(){
  back_arrow.classList.remove('fade');
  controls.classList.remove('fade');
  big_btn.classList.remove('fade');
  video.classList.remove('--cursor_none');
  fadeControls();

});


soundIcon.addEventListener('click', function(){

  if(video.muted == true){
    video.muted = false;
    unmuteIcon.classList.toggle('--none');
    muteIcon.classList.toggle('--none');
    volume.value = save;

  }else{
    save = volume.value
    video.muted = true;
    unmuteIcon.classList.toggle('--none');
    muteIcon.classList.toggle('--none');
    volume.value = 0;
    console.log('ouiiiiiiiiiii');
  }

});

back_arrow.addEventListener('click', toggleModal);


/* code voué à la poubelle */

document.querySelector('.show').addEventListener('click', function(){
  player__modal.classList.toggle('--none');

});
