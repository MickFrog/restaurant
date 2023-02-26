//Acquire elements
const content = document.getElementById('content');

    //create sub-divs
    let heading = document.createElement('div');
    heading.className = 'heading';
    let middle = document.createElement('div');
    middle.className = 'middle';
    let credit = document.createElement('div');
    credit.className = 'credit';

    //add elements to content
    content.appendChild(heading);
    content.appendChild(middle);
    content.appendChild(credit);

const headingElements = (() => {
    let bizName = document.createElement('div');
    let tabs = document.createElement('div');

    bizName.className = 'name';
    bizName.textContent = 'Mick\'s Kitchen';
    heading.appendChild(bizName);

    tabs.className = 'tabs';
    //create tab buttons
    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'homeBtn';

    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menuBtn';

    let contBtn = document.createElement('button');
    contBtn.textContent = 'Contact';
    contBtn.id = 'contBtn';

    tabs.appendChild(homeBtn); 
    tabs.appendChild(menuBtn); 
    tabs.appendChild(contBtn);

    heading.appendChild(tabs);
})();