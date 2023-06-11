/*Apparition de tous les éléments lors du chargement de la page*/

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 1;
      setTimeout(function(){
        elements[i].style.opacity = 1;
      }, i * 500);
    }
});


  
  
  
  


  
  


