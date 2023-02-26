export default function producemiddle(middleDiv) {
    while (middleDiv.firstChild) {
        middleDiv.removeChild(middleDiv.firstChild);
    }

    let contactDetails = document.createElement('div');
    contactDetails.innerHTML = '\
    <p>Name: Mick\'s Kitchen</p>\
    <p>Address: 123 Main Street, Anytown, USA</p>\
    <p>Phone: (555) 123-4567</p>\
    <p>Email: info@mickitchen.com</p>\
    <br> \
    <p>Thank you for considering Mick\'s Kitchen for your dining experience. \
    We take pride in serving our guests with warm hospitality and quality food, \
    and we hope you\'ll enjoy your time with us. If you have any questions or comments, \
    please don\'t hesitate to contact us. We look forward to welcoming you soon!</p>';

    middleDiv.appendChild(contactDetails);
}