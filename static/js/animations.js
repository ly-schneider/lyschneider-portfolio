// Registering the GSAP Plugins
// ScrollTrigger for triggering animations on scroll or viewport based
// Custom Ease for custom animation eases
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

// Every animation triggers only after specifc element in viewport

// Animation Array for the navigation bar
// It gets the background-color for the navbar with the help of the getAttribute function where the hex code is stored
gsap.utils.toArray(".navbar-trigger").forEach(function (elem) {
    let height = elem.offsetHeight;
    let color = elem.getAttribute('data-gsap-color');

    ScrollTrigger.create({
        trigger: elem,
        start: '-=1 top',
        end: '' + height + '-=1',
        onEnter: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: color }),
        onLeave: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: 'transparent' }),
        onLeaveBack: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: 'transparent' }),
        onEnterBack: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: color })
    });

});

// Animation for the Ueber Mich sector. It animates the x position and the duration with a custom ease
// 1. Animation moves from left to right
// 2. Animation moves from right to left 
// The difference is in the translate style attribute defined at the element by beginning.
gsap.to("#img-animation", {
    scrollTrigger: "#img-animation",
    x: 0,
    opacity: 1,
    duration: 5,
    ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})

gsap.to("#ueber-animation", {
    scrollTrigger: "#ueber-animation",
    x: 0,
    opacity: 1,
    duration: 5,
    ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})

// Animation Array for the fotografie sector I decided to use a array and a foreach function because 
// I does the same animation to every element so instead of repeating it I just made a forEach function
gsap.utils.toArray(".fotografie-animation").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        onEnter: () => gsap.to(elem, { duration: 2, opacity: 1, ease: "power3.out" }),
    });

});


// Animation for the Informatik Sector (animates translate x position and opacity with a customease)
gsap.to("#informatik-text-animation", {
    scrollTrigger: "#informatik-text-animation",
    x: 0,
    opacity: 1,
    duration: 5,
    ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})

gsap.to("#informatik-icons-animation", {
    scrollTrigger: "#informatik-icons-animation",
    x: 0,
    opacity: 1,
    duration: 5,
    ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})