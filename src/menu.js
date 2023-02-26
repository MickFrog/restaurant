let meals = ['Grilled Salmon', 'Chicken Parmesan', 'Bacon Cheeseburger', 'Vegetarian Curry',
                'Beef Stroganoff', 'Roast Pork', 'Caesar Salad', 'Margherita Pizza'];

let mealDesc = ['Freshly grilled salmon served with a side of mixed vegetables and quinoa.',
                'Breaded chicken breast topped with tomato sauce and melted mozzarella cheese, served with spaghetti.',
                'Juicy beef patty topped with crispy bacon and melted cheddar cheese, served with fries.', 
                'A blend of chickpeas, vegetables, and spices served over a bed of rice.',
                'Tender strips of beef cooked in a creamy mushroom sauce, served over egg noodles.',
                'Slow-roasted pork loin with garlic and herbs, served with roasted potatoes and green beans.',
                'Romaine lettuce with crispy bacon, croutons, and parmesan cheese, tossed in a classic Caesar dressing.',
                'A classic pizza topped with tomato sauce, fresh mozzarella cheese, and basil leaves.'];

export default function produceMenu(middleDiv) {
    while (middleDiv.firstChild) { //clear middle div
        middleDiv.removeChild(middleDiv.firstChild);
    }

    let menuDiv = document.createElement('div');
    menuDiv.style = 'display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem';

    for (let i = 0; i < meals.length; i++) {
        let temp = document.createElement('div');
        temp.innerHTML = `<p style='font-weight: 700;>'${meals[i]}</p>
                            <hr>
                            <p>${mealDesc[i]}</p>`
    }

}