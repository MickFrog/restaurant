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
    homeBtn.style = 'border-bottom: .5rem solid black';

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

const middleElements = (() => {
    let message = document.createElement('div');
    message.textContent = 'Welcome to Mick\'s Kitchen, where exquisite cuisine meets exceptional service. \
        Our restaurant is dedicated to providing our guests with an unforgettable dining experience, \
        from the moment they walk through our doors until they leave with satisfied palates and happy hearts.';

    middle.appendChild(message);
})();

const creditElements = (() => {
    let photoCredit = document.createElement('p');

    photoCredit.innerHTML = 'Photo by &nbsp;<a href="https://unsplash.com/@cant89?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Davide Cantelli</a> &nbsp;on \
    <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">&nbsp;Unsplash</a>'

    credit.appendChild(photoCredit);
})();