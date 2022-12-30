gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

gsap.to("#img-animation", {
  scrollTrigger: "#img-animation",
  x: 0,
  opacity: 1,
  duration: 2.5,
  ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})

gsap.to("#ueber-animation", {
  scrollTrigger: "#ueber-animation",
  x: 0,
  opacity: 1,
  duration: 2.5,
  ease: CustomEase.create("custom", "M0,0 C0.083,0.294 0.058,0.847 0.372,0.94 0.522,0.984 0.752,1 1,1 ")
})

ScrollTrigger.create({
  trigger: "#left-border-animation",
  start: 'top 70%',
  onEnter: () => gsap.to("#left-border-animation", { duration: 4, opacity: 1, borderColor: 'white', borderWidth: '2px', width: '100%', ease: "power3.out" }),
});

ScrollTrigger.create({
  trigger: "#right-border-animation",
  start: 'top 70%',
  onEnter: () => gsap.to("#right-border-animation", { duration: 4, opacity: 1, borderColor: 'black', borderWidth: '2px', width: '100%', ease: "power3.out" }),
});

gsap.utils.toArray(".left-side-animation").forEach(function (elem) {
  ScrollTrigger.create({
      trigger: elem,
      start: 'top 70%',
      onEnter: () => gsap.to(elem, { duration: 2, opacity: 1, x: 0, ease: "power3.out" }),
  });
});

gsap.utils.toArray(".right-side-animation").forEach(function (elem) {
  ScrollTrigger.create({
      trigger: elem,
      start: 'top 70%',
      onEnter: () => gsap.to(elem, { duration: 2, opacity: 1, x: 0, ease: "power3.out" }),
  });
});

gsap.utils.toArray(".reveal-animation").forEach(function (elem) {
  ScrollTrigger.create({
      trigger: elem,
      start: 'top 70%',
      onEnter: () => gsap.to(elem, { duration: 3, opacity: 1, ease: "power3.out" }),
  });
});