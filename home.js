
//burger-menu-de-tout-les-pages

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