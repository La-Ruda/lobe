

let bttn = document.querySelector(".header__switch--hamburger");

let lineOne = document.getElementById("hamburger__line--one")

let lineTwo = document.getElementById("hamburger__line--two")

let lineThree = document.getElementById("hamburger__line--three")

let mrdka = document.querySelector('.header__middle--hamburger');

const openSesame = () => {
    
  bttn.classList.toggle("cervena");

  lineOne.classList.toggle("hamburger__opened--one");

  lineTwo.classList.toggle("hamburger__opened--two");

  lineThree.classList.toggle("hamburger__opened--three");

  mrdka.classList.toggle("header__middle--godown");
  
}


bttn.addEventListener("click", openSesame);


// elements.forEach(element => {
//   element.style.top = '40px';
// });