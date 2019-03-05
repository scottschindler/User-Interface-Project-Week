// JS goes here

class Dropdown {
    constructor(element){
        this.element = element;

        this.element.button.addEventListener('click', () => {console.log('clicked!')})

    }
}



const burger = document.querySelector(".hamburger");



burger.addEventListener('click', () => {
  console.log(`clicked!`);
  event.stopPropagation();
})