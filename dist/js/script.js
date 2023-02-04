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

            if (text.style.display === 'block') {
            
                text.style.display = 'none';

            } else {
            
                text.style.display = 'block';
            }
        });
    }
});