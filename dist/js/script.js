"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // hamburger
    const menu = document.querySelector('.menu__list'),
          menuItem = document.querySelectorAll('.menu__link'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {

        item.addEventListener('click', () => {

            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
        });
    });

    // accordion
    const title = document.getElementsByClassName('accordion__title');
    let i;

    for (i = 0; i < title.length; i++) {

        title[i].addEventListener('click', function() {

            this.classList.toggle('active');

            const text = this.nextElementSibling;

            if (text.style.maxHeight) {
                
                text.style.maxHeight = null;

            } else {
                
                text.style.maxHeight = text.scrollHeight + 'px';
            }
        }
    )};

    // smooth scroll and pageup
    let upBtn = document.querySelector('.pageup');

    upBtn.onclick = () => window.scrollTo({
        
        top: 0, 
        behavior: 'smooth' 
    });

    window.onscroll = () => window.scrollY > 2000 
                                                ? upBtn.style.opacity = 1 
                                                : upBtn.style.opacity = 0;

});