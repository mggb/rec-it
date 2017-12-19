
var action = document.querySelector('.action');
var animation = document.querySelector('.animation');
var comedy = document.querySelector('.comedy');
var horor = document.querySelector('.horor');



action.addEventListener('click',function () {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Action') {
      console.log(i);
      console.log(data.films[i]);
    }
  }
});
animation.addEventListener('click',function () {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='animation') {
      console.log(i);
      console.log(data.films[i]);
    }
  }
});
comedy.addEventListener('click',function () {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Comedy') {
      console.log(i);
      console.log(data.films[i]);
    }
  }
});
horor.addEventListener('click',function () {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Horror / Thriller') {
      console.log(i);
      console.log(data.films[i]);
    }
  }
});
