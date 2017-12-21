/*fonction featured */
 var section =document.querySelector('.featured ');
 /*var overlay =document.querySelector('.');
 var section1=document.querySelector('.section1');*/
 var j = 0;
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].featured==true) {
      var content = "<p class='author_name'>";
        content += data.films[i].author;
      content += "</p>";
      content += "<span class = 'film_title'>";
        content += data.films[i].title;
      content +="</span>";
      content +="<p class ='film_description'>";
        content += data.films[i].description;
      content += "</p>";
      content += "<div class ='action_pannel'>";
        content +="<button class='video_link'>";
          content +="Voir le film";
        content +="</button>";
        content +="<button class = 'info_link'>"
          content += 'i';
        content += "</button>";
      content += "</div>";
      section.innerHTML=content;
      section.setAttribute('style', 'background-image:url('+data.films[i].img_url+')');
    //<section style="" id="" class="">
    /*creer les element de la section 2 homepage*/
    j = i;
  }}

  /*
  var content2 = "<span class=''>";
    content2 += data.films[j].author;
  content2 +=  "</span>";
  content2 +=  "<h1 class = ''>";
    content2 +=  data.films[j].title;
  content2 +=  "</h1>" ;
  content2 +=  "<p class =''>";
    content2 += data.films[j].description;
  content2 += "</p>";
  content2 += "<div class =''>";
    content2 += "<button class=''>";
      content2 += "Afficher la vidéo";
    content2 +=  "</button>";
    content2 += "<button class = ''>";
      content2 += 'i';
    content2 += "</button>";
  content2 += "</div>";
  section1.innerHTML = content2;
  /*section 2 overlay
  var content3 = "<h2 class=''>";
    content3 += 'description';
  content3 += "</h2>";
  content3 +=
section2.innerHTML =content3;
section.setAttribute('style', 'background-image:url('+data.films[i].img_url+')');
};

*/
  /*fonction liste les mieux noté*/
  var ul =document.querySelector('.coverContainer');
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].rating>'3') {
      var MonLi=document.createElement('li');
      MonLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
      MonLi.className='coverimg';
      ul.appendChild(MonLi);
    }
  };


function check (data){
for (var it =0; it < data.length; it++){
  if (it+1 < data.length && data[it].year < data[it+1].year){
    return it;
  }
}}
function order (film_array){
  var tmp = {};
  var nb = 0;

  while ((nb = check(film_array)) !== film_array.lenght){
    tmp = film_array[nb+1];
  film_array[nb+1]=film_array[nb];
film_array[nb]=tmp;  }
return film_array;
}

 var order = order(data.films.slice());
 /*fonction dernier ajout*/
 var ul2 =document.querySelector('.containernews');

 for (var i = 0; i < order.length; i++) {
   var  Monlulu=document.createElement('coverimg');
   Monlulu.innerHTML='<img class= "cover" src='+order[i].img_url+ "></img>"+'<p class = "coverTxt">' + order[i].title + "</p>"+'<p class = "coverTxt">' + order[i].year + "</p>";
   Monlulu.className='coverimg';
   ul2.appendChild(Monlulu);
 };
 /*  fonction tout le sfilm*/
   var monUL =document.querySelector('.fullfilm');

  for (var i = 0; i < data.films.length; i++) {
    var TonLi=document.createElement('li');
    TonLi.innerHTML='<img class= "cover" src='+data.films[i].img_url+ "></img>" + '<p class = "coverTxt">' + data.films[i].title + "</p>";
    TonLi.className='coverimg';
    monUL.appendChild(TonLi);
  };

  var chopeli = document.querySelectorAll('.coverimg');
  console.log(chopeli);
  for (var i = 0; i < chopeli.length; i++) {
    chopeli[i].addEventListener('click', function(event){
      var name = event.path[1].children[1].textContent;
      var tmp_it = 0;
      console.log(name);
      while (data.films[tmp_it].title !== name)
      {
        tmp_it++;
      }
      console.log(data.films[tmp_it]);
      var movieSelected = data.films[tmp_it];

      var modal =document.querySelector('.modal');
      modal.style.display='block';


    var content2 = "<button class='close'>";
      content2 +=  "</button>";
      content2 +=  "<div class='modal_content'>";
      content2 +=  "<section class='modal_section1'>";
          content2 +=  "<p class='author_name_modal'>" ;
            content2 +=  movieSelected.author;
        content2 += "</p>";
        content2 += "<span class='film_title'>";
          content2 += movieSelected.title;
        content2 += "</span>";
        content2 += "<p class='film_description'>";
          content2 +=  movieSelected.description;
        content2 += "</p>";
        content2 += "<div class='action_pannel'>";
          content2 += "<button href='#' class='video_link'>";
            content2 += "Voir le film";
            content2 += "</button>";
        content2 += "</div>";
      content2 += "</section>";
      content2 +="<section class='modal_section2'>";
        content2 +="<div class='barredPosition1'>";
          content2 +="<p class='rating1'>";
          content2 +="description"
          content2 +="</p>"
          content2 += "<div class='barRed5'>";
          content2 += "</div>";
        content2 += "</div>";
      content2 += "<div class='descContainerTotal'>";
        content2 += "<div class='descContainer'>";
        content2 += "<div class='tendu'>";
          content2 += "<li class='desc'>";
            content2 += "Catégorie :";
          content2 += "</li>";
          content2 += "<p class='Blabla'>";
            content2 += movieSelected.category;
          content2 += "</p>";
        content2 += "</div>"
        content2 += "<div class='tendu'>";
          content2 += "<li class='desc'>";
            content2 += "note:"
          content2 += "</li>"
          content2 += "<p class='Blabla'>";
            content2 += movieSelected.rating;
            content2 += "/5";
          content2 += "</p>";
        content2 += "</div>";
        content2 += "<div class='tendu'>";
          content2 += "<li class='desc'>";
            content2 += "année :";
          content2 += "</li>";
          content2 += "<p class='Blabla'>";
            content2 += movieSelected.year;
          content2 += "</p>";
        content2 += "</div>";
        content2 += "</div>";
        content2 += "<div class='descContainer2'>";
        content2 += "<div class='tendu'>";
          content2 += "<li class='desc2'>";
            content2 += "Auteur :";
          content2 += "</li>";
          content2 += "<p class='Blabla'>";
            content2 += movieSelected.author;
          content2 += "</p>";
          content2 += "</div>";
          content2 += "<div class='tendu'>";
          content2 += "<li class='desc2'>";
            content2 += "site auteur :";
          content2 += "</li>";
          content2 += "<p class='Blabla'>";
            content2 += movieSelected.author_url;
          content2 += "</p>";
          content2 += "</div>";
        content2 += "</div>";
      content2 += "</div>";
        content2 += "<div class='barredPosition2'>";
          content2 += "<p class='rating2'>";
            content2 += "A propos";
          content2 += "</p>";
          content2 += "<div class='barRed5'>";
          content2 += "</div>";
        content2 += "</div>";
        content2 += "<p class='desctexte'>";
          content2 += movieSelected.description;
        content2 += "</p>";
        content2 += "<p class='CoucouJeSuisUntexteInutile'>";
          content2 += "Lire +";
        content2 += "</p>";
      content2 += "</section>";
    content2 += "</div>"
      modal.innerHTML = content2;
      var section1_modal=document.querySelector('.modal_section1');
      section1_modal.setAttribute('style', 'background-image:url('+movieSelected.img_url+')');

      var close=document.querySelector('.close');
      close.addEventListener('click',function(){
        modal.style.display='';
      });
    });
  }
