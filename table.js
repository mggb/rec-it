
var action = document.querySelector('.action');
var animation = document.querySelector('.animation');
var comedy = document.querySelector('.comedy');
var horor = document.querySelector('.horor');
var catego =document.querySelector('.catego')


var div=document.querySelector('.div')
action.addEventListener('click',function () {
  catego.innerHTML='';
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Action') {
       var pourLi=document.createElement('li');
         pourLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
         pourLi.className='coverimg';
         catego.appendChild(pourLi);
    }
  }
});
animation.addEventListener('click',function () {
  catego.innerHTML='';
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Animation') {
      var pourLi=document.createElement('li');
        pourLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
        pourLi.className='coverimg';
        catego.appendChild(pourLi);
    }
  }
});
comedy.addEventListener('click',function () {
  catego.innerHTML='';
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Comedy') {
      var pourLi=document.createElement('li');
        pourLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
        pourLi.className='coverimg';
        catego.appendChild(pourLi);
    }
  }
});
horor.addEventListener('click',function () {
  catego.innerHTML='';
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].category=='Horror / Thriller') {
      var pourLi=document.createElement('li');
        pourLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
        pourLi.className='coverimg';
        catego.appendChild(pourLi);
    }
  }
});
var button_video =document.querySelector('.video_link');
var trade = event.path[3].children[1].children[1].span;
var modal_video = document.querySelector('.modal_video1')
button_video.addEventListener('click',function (event) {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i]!==trade) {
      i++
    }
    modal_video.style.display='block';
    section1_modal.setAttribute('style', 'background-video:url('+data.img_url+')');
  }
});

/*button.addEventListener("click", function(){
  overlay.style.display = 'block';
})*/
