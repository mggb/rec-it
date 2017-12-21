/* prendre les éléments */
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
  var all__video__controls = document.querySelector('.control');

  var save

  var test = false;

  var settings = {

    autoPlay : true,

  }

/* Construire les fonctions */
function toggleControls(){
  if(test = true){

    all__video__controls.classList.toggle('fade');

  }else{

  }

}

function togglePlay() {

  if (video.paused) {
    video.play();
    big_btn.classList.toggle('fade');
    player.addEventListener('mouseenter', toggleControls);
    player.addEventListener('mouseleave', toggleControls);
    fadeControls();

  }else{
    video.pause();
    big_btn.classList.toggle('fade');
    player.addEventListener('mouseenter', toggleControls);
    player.addEventListener('mouseleave', toggleControls);

  }

}

function updateButton() {

  if (this.paused) {
    toggle.textContent = '▶';
    big_btn.textContent = '▶';

  }else{
    toggle.textContent = '❙❙';
    // fadeControls();
  }

}

function fadeControls(){
  window.setTimeout(function(){
    all__video__controls.classList.toggle('fade');
    player.classList.toggle('--cursor_none');
    console.log('ca marche');
  }, 3000);
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
/*¨

volume.addEventListener('click', function (){
  video.value = volume.value / 100;
});
*/

function toggleMute(){
  video.volume = 0;
  soundIcon.textContent = '🔇';
  volume.value = 0;
}

function handleRangeUpdate() {

  // fonction du volume
  var value = this.value / 100;
  video.volume = value;
  save = video.volume;
  console.log('saved :' + save);


  if(video.volume === 0){
    soundIcon.textContent = '🔇';

  }else{
    soundIcon.textContent = '🔈';
  }

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
function toggleFullScreen(){
  video.webkitRequestFullscreen();
}
function toggleModal() {
  player__modal.classList.toggle('--none');
}

function timer(){
  var chronoM = Math.floor(video.currentTime / 60);
  var chronoS = Math.floor(video.currentTime - 60 * chronoM);
  if (chronoS < 10){
    chronoS = "0" + chronoS;
  }
  var total = video.duration;
  time.textContent = chronoM + ":" + chronoS;
}



/* Accrocher les events listener */
video.addEventListener('click', togglePlay);
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

big_btn.addEventListener('click', togglePlay);

/*
player.addEventListener('mouseenter', toggleControls);
player.addEventListener('mouseleave', toggleControls);
*/

player.addEventListener('mousemove', function(){
  controls.classList.remove('fade');
  video.classList.remove('--cursor_none');
  fadeControls();
  console.log('souris bouge');
});


soundIcon.addEventListener('click', function(){
  if(video.volume === 0){
    console.log('le volume reviens à '+ save);

  }else{
    console.log(volume.min);

  }
});

//
modal__overlay.addEventListener('click', toggleModal);
back_arrow.addEventListener('click', toggleModal);

/*
reste à faire :

- régler le mode plein ecran qui bug
- régler le display none sur la barre de son
- régler le problemme d'affichage du grand bouton play/pause en plein ecran
- régler le problème du son trop fort en début de video
- enlever les ombres bleues dégeulasse du style par défaut du navigateur quand on clique sur les boutons
- comprendre comment empecher le mousemove de se lancer continuellement
- gérer le problème du Z index sur le bouton play en plei ecran

*/

/* code voué à la poubelle */

document.querySelector('.show').addEventListener('click', function(){
  player__modal.classList.toggle('--none');

});
