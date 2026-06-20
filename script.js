const button = document.querySelector('.button');
const buttonImage = document.querySelector('.button-image');
const bottombar =  document.querySelector('.bottombar');
const bottombarOrig = document.querySelector('.bottombar--orig');
const bottombarShare = document.querySelector('.bottombar--share');

button.addEventListener('click', () => {
    const isDesktop = window.innerWidth >= 768;

    bottombarShare.classList.toggle('hidden');
    buttonImage.classList.toggle('dark__image-background');

    if (!isDesktop) {
    bottombarOrig.classList.toggle('hidden');
    bottombar.classList.toggle('dark__background');
    }


    if(buttonImage.getAttribute('src') === 'images/icon-share.svg') {
        buttonImage.setAttribute('src', 'images/icon-share-white.svg');
    } else {
        buttonImage.setAttribute('src', 'images/icon-share.svg');
    }
});


window.addEventListener('resize', () => {
    bottombarShare.classList.add('hidden');
  
    bottombar.classList.remove('dark__background');
    bottombarOrig.classList.remove('hidden');
  
    buttonImage.classList.remove('dark__image-background');
    buttonImage.src = 'images/icon-share.svg';
  });





// button.addEventListener('click', () => {
//     buttonImage.src = 'images/icon-share.svg';
//     buttonImage.classList.replace('dark','light');

// });

// document.querySelector('.bottombar__button-image').src ='images/icon-share-white.svg';
// document.querySelector('.bottombar__button-image').classList.replace('light','dark');
// document.querySelector('.bottombar__image').classList.toggle('hidden');
// document.querySelector('.bottombar__author').classList.toggle('hidden');
// document.querySelector('.dark-background').classList.toggle('hidden');
// }

// chatgpt version below
// const author = document.querySelector('.bottom-bar__author');
// const share = document.querySelector('.bottom-bar__share');
// const button = document.querySelector('body');

// button.addEventListener('click', () => {
//     author.style.display = 'none';
//     share.style.display = 'flex';
// });


// another way 
// const anyClick = document.querySelector('body');

// anyClick.addEventListener('click', () => {
//     anyClick.style.backgroundColor = "red";
// });










