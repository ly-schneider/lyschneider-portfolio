window.onload = function () {
    var dob = new Date("08/16/2008");

    var month_diff = Date.now() - dob.getTime();

    var age_dt = new Date(month_diff);

    var year = age_dt.getUTCFullYear();

    var age = Math.abs(year - 1970);

    document.getElementById("age").innerHTML = age + " years old,";

    if (age > 15) {
        document.getElementById("work").innerHTML = "currently working.";
    } else {
        document.getElementById("work").innerHTML = "still at school.";
    }
}


gsap.registerPlugin(ScrollTrigger);

/* Loading Animation */

tl2 = new TimelineMax({});
tl2.to($("#progress"), 1, { value: 100 });

gsap.to("body", {
    duration: 1,
    overflowY: "none"
})

gsap.to('#progress', {
    delay: 1,
    autoAlpha: 0
})

gsap.to('.navbar-brand', {
    duration: 2,
    x: '-400%',
    y: '-50%',
    fontSize: 28,
    ease: 'power4',
    delay: 0.8
})

gsap.to('.nav', {
    delay: 1,
    duration: 0.5,
    opacity: 1
})

gsap.to('.line', {
    opacity: 1,
    delay: 1,
    duration: 0.5
})

gsap.to('.circle', {
    opacity: 1,
    delay: 1,
    duration: 0.5
})

gsap.to('.animation-title', {
    delay: 1,
    duration: 0.5,
    autoAlpha: 1
})

gsap.to('.animation-content', {
    delay: 1,
    duration: 0.5,
    autoAlpha: 1
})

gsap.to('.test', {
    delay: 1,
    duration: 0.5,
    autoAlpha: 1
})

gsap.to('.pog', {
    delay: 1,
    duration: 0.5,
    autoAlpha: 1
})

/* Fade out animation */

gsap.to('.animation-title', {
    scrollTrigger: {
        trigger: '#invisible-one',
        start: 'center bottom',
        scrub: true,
        pin: '.animation-content'
    },
    duration: 1,
    ease: 'power4',
    opacity: 0
})

gsap.to('.animation-content', {
    scrollTrigger: {
        trigger: '#invisible-one',
        start: 'center bottom',
        scrub: true,
        pin: '.animation-title'
    },
    duration: 1,
    opacity: 0,
    ease: 'power4'
})

/* Scroll Line Fade In and Out*/

gsap.to(".line2", {
    scrollTrigger: {
        trigger: '#invisible-one',
        start: 'top bottom',
        scrub: true
    },
    duration: 0.3,
    opacity: 1,
})

/* Scroll Text Two Fade In */

gsap.to('.test', {
    scrollTrigger: {
        trigger: '#invisible-two',
        start: 'center bottom',
        scrub: true,
        pin: '.pog'
    },
    duration: 1,
    ease: 'power4',
    opacity: 0
})

gsap.to('.pog', {
    scrollTrigger: {
        trigger: '#invisible-two',
        start: 'center bottom',
        scrub: true,
        pin: '.test'
    },
    duration: 1,
    opacity: 0,
    ease: 'power4'
})