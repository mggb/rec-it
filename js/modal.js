var btn = document.querySelector('.info_link');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal_overlay');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  modal.style.display = '';
});
