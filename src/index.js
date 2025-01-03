import "./style.css";
import middle from "./initial-page";
import {
  headingElements,
  middleElements,
  creditElements,
} from "./initial-page";
import producemiddle from "./contacts";
import produceMenu from "./menu";

//create home page
headingElements();
middleElements();
creditElements();

//Acquire elements
let home = document.getElementById("homeBtn");
let menu = document.getElementById("menuBtn");
let contact = document.getElementById("contBtn");

//Event Listeners
home.addEventListener("click", () => {
  //clear middle
  while (middle.firstChild) {
    middle.removeChild(middle.firstChild);
  }

  middleElements();

  adjustBorder(home, menu, contact);
});

contact.addEventListener("click", () => {
  producemiddle(middle);

  adjustBorder(contact, menu, home);
});

menu.addEventListener("click", () => {
  produceMenu(middle);

  adjustBorder(menu, home, contact);
});

function adjustBorder(target, other1, other2) {
  //   target.style = "border-bottom: .5rem dotted black";
  Object.assign(target.style, {
    borderBottom: ".5rem dotted black",
    color: "#CF1259",
  });

  target.onmouseover = () => {};

  other1.style = "border-bottom: 0px;";
  other1.onmouseover = () => {
    other1.style = "border-bottom";
  };

  other2.style = "border-bottom: 0px;";
  other2.onmouseover = () => {
    other2.style = "border-bottom";
  };
}
