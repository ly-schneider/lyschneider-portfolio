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



// ----- Navigation ----- //
const navbar = document.querySelector(".navbar");

ScrollTrigger.create({
  trigger: "#top",
  start: 'top 10%',
  end: '90% top',
  onEnter: () => gsap.to(".navbar", { opacity: 0, ease: "power1.out" }),
  onEnterBack: () => gsap.to(".navbar", { opacity: 0, ease: "power1.out" }),
  onLeave: () => gsap.to(".navbar", { opacity: 1, ease: "power1.out" }),
  onLeaveBack: () => gsap.to(".navbar", { opacity: 1, ease: "power1.out" }),
});

ScrollTrigger.create({
  trigger: "#foto",
  start: 'top 15%',
  end: '106% top',
  onEnter: () => {
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
  },
  onEnterBack: () => {
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-light");
  },
  onLeave: () => {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
  },
  onLeaveBack: () => {
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-dark");
  }
});

// Change Active Class
gsap.utils.toArray(".change-active").forEach(function (elem) {
  const id = elem.getAttribute('gsapNavId');
  console.log(id);
  ScrollTrigger.create({
    trigger: elem,
    start: 'top top',
    end: 'bottom top',
    onEnter: () => {
      document.querySelectorAll(".nav-link").forEach(function (navLinks) {
        navLinks.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    },
    onEnterBack: () => {
      document.querySelectorAll(".nav-link").forEach(function (navLinks) {
        navLinks.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    },
    onLeave: () => {
      document.querySelectorAll(".nav-link").forEach(function (navLinks) {
        navLinks.classList.remove("active");
      });
      document.getElementById(id).classList.remove("active");
    },
    onLeaveBack: () => {
      document.querySelectorAll(".nav-link").forEach(function (navLinks) {
        navLinks.classList.remove("active");
      });
      document.getElementById(id).classList.remove("active");
    },
  });
});

// Fix divider issue
ScrollTrigger.create({
  trigger: "#divider-1",
  start: 'top top',
  end: 'bottom top',
  onEnter: () => {
    document.getElementById("nav-film").classList.add("active");
  },
  onEnterBack: () => {
    document.getElementById("nav-film").classList.add("active");
  },
  onLeave: () => {
    document.getElementById("nav-film").classList.remove("active");
  },
  onLeaveBack: () => {
    document.getElementById("nav-film").classList.remove("active");
  },
});

ScrollTrigger.create({
  trigger: "#divider-2",
  start: 'top top',
  end: 'bottom top',
  markers: true,
  onEnter: () => {
    document.getElementById("nav-foto").classList.add("active");
  },
  onEnterBack: () => {
    document.getElementById("nav-foto").classList.add("active");
  },
  onLeave: () => {
    document.getElementById("nav-foto").classList.add("active");
  },
  onLeaveBack: () => {
    document.getElementById("nav-foto").classList.add("active");
  },
});




// ----- Fix Clicks ----- //
// Get all elements with the "nav-link" class
const navLinksClicked = document.querySelectorAll('.nav-link');
navLinksClicked.forEach(function (link) {
  link.addEventListener('click', function () {
    const self = this;
    setTimeout(function () {
      navLinksClicked.forEach(function (link) {
        link.classList.remove('active');
      });
      self.classList.add('active');
    }, 800);
  });
});
