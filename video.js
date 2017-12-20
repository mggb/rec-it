/*fonction featured */
 var section =document.querySelector('.featured');
 var overlay =document.querySelector('.overlay');
 var section1=document.querySelector('.section1');
 var j = 0;
  for (var i = 0; i < data.films.length; i++) {
    if (data.films[i].featured==true) {
      var content = "<span class=''>";
        content += data.films[i].author;
      content += "</span>";
      content += "<h1 class = ''>";
        content += data.films[i].title;
      content +="</h1>";
      content +="<p class =''>";
        content += data.films[i].description;
      content += "</p>";
      content += "<div class =''>";
        content +="<button class=''>";
          content +="Afficher la vidéo";
        content +="</button>";
        content +="<button class = ''>"
          content += 'i';
        content += "</button>";
      content += "</div>";
      section.innerHTML=content;
      section.setAttribute('style', '');
    //<section style="" id="" class="">
    /*creer les element de la section 2 homepage*/
    j = i;
  }
  button.addEventListener("click", function(){
    overlay.style.display = 'block';
  })
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
  /*section 2 overlay */
  var content3 = "<h2 class=''>";
    content3 += 'description';
  content3 += "</h2>";
  content3 +=
section2.innerHTML =content3;
section.setAttribute('style', 'background-image:url('data.films[i].img_url')');
};


  /*fonction liste les mieux noté*/
  var ul =document.querySelector('.slider');
  for (var i = 0; i < data.film.length; i++) {
    if (data.film[i].rating>'3') {
      var MonLi=document.createElement('li');
      MonLi.innerHTML='<img class="poire">'+data.films[i].image+ "</img>" + '<p class = "">' + data.films[i].title + "</p>";
      ul.appendChild(MonLi);
    }
  };

  /*fonction tout le sfilm*/
  var monUL =document.querySelector('.ul');

 for (var i = 0; i < data.films.length; i++) {
   var MonLi=document.createElement('li');
   MonLi.innerHTML='<img class="poire">'+data.films[i].image+ "</img>"  '<p class = "">' + data.films[i].title + "</p>";
   monUL.appendChild(MonLi);
 };


 /*fonction dernier ajout*/
 var ul2 =document.querySelector('.ul2');

 for (var i = 0; i < data.films.length; i++) {
  if (data.films[i].date) {
    var  Monlulu=document.createElement('li');
    Monlulu.innerHTML='<img class="paul">'+data.films[i].image+ "</img>"  '<p class = "">' + data.films[i].year + "</p>";
    ul2.appendChild(Monlulu);
 };
