const slideValue = document.querySelector(".value0ffiltra");
const inputSlider = document.querySelector(".inputoffiltra");
let progress = document.querySelector('.progress-bar');

inputSlider.oninput = (() => {


    let value = inputSlider.value;
    if (value == 0) {
        slideValue.style.opacity = '0';
    } else {
        slideValue.style.opacity = '10';

    }



    progress.style.width = (value / 3) + '%';
    slideValue.textContent = "$" + value;
    slideValue.style.left = (value / 6) + "%";


});


const slideValue2 = document.querySelector(".notchvalue");
const inputSlider2 = document.querySelector(".notch-input");
let progress2 = document.querySelector('.progress-bar2');

inputSlider2.oninput = (() => {
    let value = inputSlider2.value;
    if (value == 0) {
        slideValue2.style.opacity = '0';
    }
    else {
        slideValue2.style.opacity = '10';
    }
    progress2.style.width = (value * 23) + '%';
    slideValue2.textContent = value + "noches";
    slideValue2.style.left = (value * 10) + "%";

});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');


    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');

    }
}


items.forEach(item => item.addEventListener('click', toggleAccordion));

