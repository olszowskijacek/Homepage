console.log('Cześć wszystkim!');

const changeColorButton = document.querySelector('.changeBgc');

const backgroundSite = document.querySelector('.container');

changeColorButton.addEventListener('click', ()=> {
    backgroundSite.classList.toggle('lightBackground');
});