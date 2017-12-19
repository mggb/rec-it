var buttton=document.querySelector('.button');
var ul=document.querySelector('.container');


var makeLi = document.createElement('video');
var maketext =document.createTextNode('2');

buttton.addEventListener('click',function (){
  ul.appendChild(makeLi).appendChild(maketext);
});
