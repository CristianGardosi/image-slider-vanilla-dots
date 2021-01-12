const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.button');
let currentSlide = 1;

// * Manual navigation * \\
const manualNav = (i => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    slides[i].classList.add('active');
    buttons[i].classList.add('active');
});

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
});


// * Autoplay navigation * \\
const repeat = (activeClass => {
    let active = document.getElementsByClassName('active');
    let i = 1;

    const repeater = () => {
        setTimeout(function() {
            [...active].forEach(activeSlide => {
                activeSlide.classList.remove('active');
            })
            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++;

            if(slides.length === i) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
});
repeat();

