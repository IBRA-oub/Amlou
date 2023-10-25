
//---------burger-menu-de-tout-les-pages-------
const burger=document.querySelector('.burger-menu');
const showBurger=document.querySelector('.top-area .navbar');

burger.addEventListener('click',()=>{
    showBurger.classList.toggle('showburger');
})

//-------------------FAQ--------------


const question=document.getElementsByClassName("question");
const anser=document.getElementsByClassName("anser");

for(let i=0 ; i< question.length ; i++){
    question[i].addEventListener('click', () => {
        question[i].classList.toggle('showmoins');
        anser[i].classList.toggle('showanser');
    })
}

//--------------------how it's made scroll---------------

window.addEventListener("scroll", function() {
    var elements = document.querySelectorAll(".etapesec");
  
    elements.forEach(function(element) {
      var position = element.getBoundingClientRect();
  
      
      if ((position.top < window.innerHeight/1.5)) {
        element.classList.add("fade-in");
      }
    });
  });

  //------------------------input-validation----------------

  