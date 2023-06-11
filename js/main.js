


/*Transition entre les pages .slide-in*/


// Sélectionnez tous les éléments "a" dans le menu
var menuLinks = document.querySelectorAll(".onglet");

// Ajoutez un événement "click" à tous les éléments "a" dans le menu
for (var i = 0; i < menuLinks.length; i++) {
menuLinks[i].addEventListener("click", function(event) {
event.preventDefault(); // Empêche la redirection par défaut
var link = this;
// Sélectionnez l'élément "slide-in"
var slideIn = document.querySelector(".slide-in");
// Modifiez les propriétés de style de l'élément "slide-in" pour le déplacer vers la gauche
slideIn.style.left = "0%";
setTimeout(function() {
window.location = link.href; // Redirigez vers la page liée à l'élément "a" cliqué
}, 1500);
});
}




    /*Toggle slide du panneau de controle */

    var isSlideOpen = false;
function toggleSlide(){
    var slide = document.getElementById("panneau-controle-couleur");
    if(!isSlideOpen){
        slide.style.width = "60px";
        slide.style.right = "0px";
        isSlideOpen = true;
    }else{
        slide.style.right = "-80px";
        isSlideOpen = false;
    }
}


  /*Panneau de control des couleurs */

  const colorSquares = document.querySelectorAll('.color-square');
  let color = localStorage.getItem('selectedColor') || "#c70039";
  document.querySelectorAll('.color').forEach(el => {
      el.style.color = color;
  });
  document.querySelectorAll('.bg-color').forEach(el => {
      el.style.backgroundColor = color;
  });
  
  colorSquares.forEach(square => {
      square.addEventListener('click', function() {
          switch (this.id) {
              case 'color-1':
                  color = "#c70039";
                  break;
              case 'color-2':
                  color = "#481380";
                  break;
              case 'color-3':
                  color = "#04A777";
                  break;
              case 'color-4':
                  color = "#035aa6";
                  break;
              case 'color-5':
                  color = "#00909e";
                  break;
              case 'color-6':
                  color = "#dd7631";
                  break;
          }
          localStorage.setItem('selectedColor', color);
          document.querySelectorAll('.color').forEach(el => {
              el.style.color = color;
          });
          document.querySelectorAll('.bg-color').forEach(el => {
              el.style.backgroundColor = color;
          });
      });
  });


  /*Pour gérer la couleur de l'icone du menu hamburger*/
  const lines = document.querySelectorAll('.line');

document.querySelector('#menu-toggle-btn').addEventListener('mouseover', function() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].style.stroke = color;
  }
});
document.querySelector('#menu-toggle-btn').addEventListener('mouseout', function() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].style.stroke = "";
  }
});

    /*Pour gérer la couleur de certains boutons qui ont la classe bg-color-hov */
  const bgColorHov = document.querySelectorAll('.bg-color-hov');

bgColorHov.forEach(el => {
    el.addEventListener('mouseover', function() {
        this.style.backgroundColor = color;
    });
    el.addEventListener('mouseout', function() {
        this.style.backgroundColor = "";
    });
});

/*Pour gérer la couleur des onglets dans le menu qui ont la classe onglet */
const onglet = document.querySelectorAll('.onglet');

onglet.forEach(el => {
    el.addEventListener('mouseover', function() {
        this.style.color = color;
    });
    el.addEventListener('mouseout', function() {
        this.style.color = "";
    });
})




// Récupère les éléments de bouton de menu et de menu
var toggleBtn = document.querySelector('#menu-toggle-btn');
var menu = document.querySelector('#menu');

// Ajoute un écouteur d'événement click au bouton de menu
toggleBtn.addEventListener('click', function() {
    // Inverse l'état de visibilité du menu
    menu.classList.toggle('visible');
});


//Animation txt rotate dans la page accueil (=home)

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #666 }";
    document.body.appendChild(css);
  };







  
  
  
  
  