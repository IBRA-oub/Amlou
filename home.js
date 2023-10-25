const burger=document.querySelector('.burger-menu');
const showBurger=document.querySelector('.top-area .navbar');

burger.addEventListener('click',()=>{
    showBurger.classList.toggle('showburger');
})
