"use strict";

window.addEventListener('DOMContentLoaded', () => {

    let btn = document.getElementsByClassName("program__accordion_btn");
    let i;

    for (i = 0; i < btn.length; i++) {

        btn[i].addEventListener("click", function() {
            
            this.classList.toggle("active");

            let panel = this.nextElementSibling;

            if (panel.style.display === "block") {
            
                panel.style.display = "none";

            } else {
            
                panel.style.display = "block";
            }
        });
    }
});