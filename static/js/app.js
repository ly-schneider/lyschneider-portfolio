window.onload = function() {
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

gsap.utils.toArray('.one').forEach((section, i) => {
  
  if(section.getAttribute('data-color') !== null) {
    
    var colorAttr = section.getAttribute('data-color')
    
    gsap.to(".line", {
      backgroundColor: colorAttr === "dark" ? gsap.getProperty("html", "--blue") : gsap.getProperty("html", "--purple"),
      immediateRender: false,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        start:'top bottom',
        end: '+=100%',
        markers: true
      }
    });

  }
  
});
