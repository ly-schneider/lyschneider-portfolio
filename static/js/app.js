gsap.registerPlugin(ScrollTrigger);

gsap.to(".grid", {
    duration: 2.5,
    opacity: 1
})

gsap.to(".text", { duration: 3, text: "Fotograf und Informatiker", ease: "none" });
let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 })

gsap.to(".btn-top-container", {
    scrollTrigger: {
        trigger: ".trigger-arrow",
        start: "top top",
        scrub: true
    },
    duration: 0.1,
    autoAlpha: 1,
    opacity: 1
})