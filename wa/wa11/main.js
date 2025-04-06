console.log("JS WORKING!");

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'A bed in the back of a space ship',
    'pic2.jpg' : 'A chair in a space ship with lots of books',
    'pic3.jpg' : 'A man with a plane and a mission',
    'pic4.jpg' : 'A man with a bag ready for the world',
    'pic5.jpg' : 'A super cool looking jacket made for trekking '
}
/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', x => {
        displayedImage.src = x.target.src;
        displayedImage.alt = x.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if(btnClass == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});