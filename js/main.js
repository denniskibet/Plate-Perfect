window.sr = ScrollReveal({
    reset: false,
    scale: 1.0,
    opacity: 0
});
// landing page
sr.reveal('.fade-in', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
});

// people page
sr.reveal('.people-description h2.title', {
    duration: 1500,
    origin: 'top',
    distance: '900px'
}).reveal('.people-description p.story', {
    duration: 2000,
    origin: 'left',
    distance: '600px',
    delay: 1500
}).reveal('.people-description h2.thanks', {
    duration: 2500,
    origin: 'bottom',
    distance: '600px',
    delay: 1500
}).reveal('.person', {
    duration: 2000,
    delay: 1500,
    distance: '600px',
    origin: 'right'
});


// enquiries page
sr.reveal('.enquiries h2.intro', {
    duration: 2000,
    origin: 'left',
    distance: '600px'
}).reveal('#email', {
    duration: 1500,
    delay: 1500,
    distance: '600px',
    origin: 'left'
}).reveal('#telephone', {
    duration: 1000,
    delay: 2500,
    distance: '200px',
    origin: 'bottom'
}).reveal('#filler-text', {
    duration: 1000,
    delay: 3000,
    distance: '200px',
    origin: 'bottom'
}).reveal('#address', {
    duration: 1000,
    delay: 3500,
    distance: '200px',
    origin: 'bottom'
}).reveal('#bid', {
    duration: 1000,
    delay: 4000,
    distance: '200px',
    origin: 'bottom'
});
revealMeal();
// meal page
function revealMeal() {
    sr.reveal('.food-image', {
        duration: 3000,
        origin: 'left',
        distance: '300px'
    });
    sr.reveal('.food-name', {
        duration: 2000,
        origin: 'top',
        distance: '225px'
    });
    sr.reveal('.food-description', {
        duration: 2000,
        delay: 500,
        origin: 'bottom',
        distance: '300px'
    });
    sr.reveal('#quantity', {
        duration: 3000,
        origin: 'right',
        distance: '900px'
    });
    sr.reveal('.order-size', {
        duration: 3000,
        delay: 600,
        origin: 'right',
        distance: '900px'
    });
    sr.reveal('.make-order', {
        duration: 3000,
        delay: 1000,
        origin: 'bottom',
        distance: '900px'
    });


}


//scrolling through the meals
{
    const prevArrows = Array.from(document.querySelectorAll('.left-arrow'));
    const nextArrows = Array.from(document.querySelectorAll('.right-arrow'));
    const meals = Array.from(document.querySelectorAll('.food-order'));
    var current = meals.indexOf(document.querySelector('.current'));
    const arrayLength = meals.length;
    console.error(arrayLength);

    prevArrows.forEach(arrow => arrow.addEventListener('click', previousMeal));
    nextArrows.forEach(arrow => arrow.addEventListener('click', nextMeal));


    function nextMeal() {
        meals[current].classList.remove('current');
        if (current === arrayLength - 1) {
            meals[0].classList.add('current');
            current = 0;
            console.log('current index is length');
        } else {
            meals[current + 1].classList.add('current');
            current += 1;
            console.log('current index isnt 0');
        }
        revealMeal();
    }

    function previousMeal() {
        meals[current].classList.remove('current');
        if (current === 0) {
            meals[arrayLength - 1].classList.add('current');
            current = arrayLength - 1;
            console.log('current index is 0');
            console.log(current);
        } else {
            meals[current - 1].classList.add('current');
            current -= 1;
            console.log(current);
        }
        revealMeal();
    }

}