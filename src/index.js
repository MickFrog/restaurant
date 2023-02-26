import middle from "./initial-page";
import { headingElements, middleElements, creditElements } from "./initial-page";
import producemiddle from "./contacts";

//create home page
headingElements()
middleElements();
creditElements();

//Acquire elements
let home = document.getElementById('homeBtn');
let menu = document.getElementById('menuBtn');
let contact = document.getElementById('contBtn');

//Event Listeners
home.addEventListener('click', () => {
    //clear middle
    while (middle.firstChild) {
        middle.removeChild(middle.firstChild);
    }

    middleElements();

    home.style = 'border-bottom: .5rem solid black';
    //clear styles on other buttons
    menu.style = 'border-bottom: 0px';
    contact.style = 'border-bottom: 0px';
});

contact.addEventListener('click', () => {
    producemiddle(middle);

    contact.style = 'border-bottom: .5rem solid black';
    //clear styles on other buttons
    menu.style = 'border-bottom: 0px';
    home.style = 'border-bottom: 0px';
});
