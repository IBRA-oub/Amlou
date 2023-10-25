
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

  //------------------------input-validation--------------------

  const inputFirst=document.querySelector('input[name="firstName"]');
  const inputLast=document.querySelector('input[ name="lastName"]');

  const email= document.querySelector('input[ name="email"]');
  
  const errorMessage=document.querySelectorAll('.errorMessage');

  const form=document.querySelector('form');

  let form_validation=false;

  const validationInput = () =>{

        //--------input-firstName--------
        if (!inputFirst.value) {
            inputFirst.classList.add('invalid');
            errorMessage[0].innerText = 'entrer votre Prenom';
            form_validation = false;
        }
        else if (inputFirst.value.length < 8) {
            inputFirst.classList.add('invalid');
            errorMessage[0].innerText = 'entrer 8 au min';
            form_validation= false;
        }
        else if (inputFirst.value.length > 20 ) {
            inputFirst.classList.add('invalid');
            errorMessage[0].innerText = 'entrer 20 au max';
            form_validation= false;
        }
        else {
            inputFirst.classList.add('valid');
            errorMessage[0].innerText = '';
            form_validation = true;
        }
         //-------------input-lastName------------
         if (!inputLast.value) {
            inputLast.classList.add('invalid');
            errorMessage[1].innerText = 'entrer votre Nom';
            form_validation = false;
        }
        else if (inputLast.value.length < 8) {
            inputLast.classList.add('invalid');
            errorMessage[1].innerText = 'entrer 8 au min';
            form_validation= false;
        }
        else if (inputLast.value.length > 20 ) {
            inputLast.classList.add('invalid');
            errorMessage[1].innerText = 'entrer 20 au max';
            form_validation= false;
        }
        else {
            inputLast.classList.add('valid');
            errorMessage[1].innerText = '';
            form_validation = true;
        }

        //-----------------input-email-----------------
        if (!email.value) {
            email.classList.add('invalid');
            errorMessage[2].innerText = 'ce champ est vide! entrer votre email';
            form_validation = false;
        }
      
       


  }
  form.addEventListener('submit', (e) => {

    e.preventDefault();
    validationInput();

    if (form_validation == true) {
        form.submit();
    }

})