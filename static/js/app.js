gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".navbar-trigger").forEach(function (elem) {
    let height = elem.offsetHeight;
    let color = elem.getAttribute('data-gsap-color');

    ScrollTrigger.create({
        trigger: elem,
        start: '-=1 top',
        end: ''+height+'-=1',
        onEnter: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: color }),
        onLeave: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: 'transparent' }),
        onLeaveBack: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: 'transparent' }),
        onEnterBack: () => gsap.to('.navbar', { duration: 0.3, backgroundColor: color })
    });

});

// Projekte Function
function changeText(pos) {
    let title = document.getElementById("projekte-title");
    let datum = document.getElementById("projekte-datum");
    let text = document.getElementById("projekte-text");
    switch (pos) {
        case "1":
            title.innerText = "Lorem Title"
            datum.innerText = "August 2019 - Jetzt"
            text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate accusantium natus"
                + "dolores. Distinctio ut fuga odit, minus debitis maiores error, hic quis eos praesentium neque ab"
                + "veniam placeat vitae?<br><br>"
                + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate accusantium natus"
                + "dolores. Distinctio ut fuga odit, minus debitis maiores error, hic quis eos praesentium neque ab"
                + "veniam placeat vitae?"
            break;
        case "2":
            title.innerText = "Lorem Title 2"
            datum.innerText = "Januar 2020 - August 2020"
            text.innerHTML = "Lorem ipsum placeat vitae?<br><br>"
                + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate accusantium natus"
                + "dolores. Distinctio ut fuga odit, minus debitis maiores error, hic quis eos praesentium neque ab"
                + "veniam placeat vitae?"
            break;
        default:
            title.innerText = "Lorem Title"
            datum.innerText = "August 2019 - Jetzt"
            text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate accusantium natus"
                + "dolores. Distinctio ut fuga odit, minus debitis maiores error, hic quis eos praesentium neque ab"
                + "veniam placeat vitae?<br><br>"
                + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptate accusantium natus"
                + "dolores. Distinctio ut fuga odit, minus debitis maiores error, hic quis eos praesentium neque ab"
                + "veniam placeat vitae?"
            break;
    }
}

function changeFunction(e) {
    e = e || window.event;
    let target = e.target || e.srcElement;
    let parent = target.parentNode;
    let length = document.getElementById("js-projekt").children.length;
    for(let i = 0; i<length; i++) {
        let classes = document.getElementById("js-projekt").children[i].classList;
        if (classes.contains("li-active") == true) {
            classes.remove("li-active");
        }
    }
    let pos = target.parentNode.id;
    changeText(pos)
    parent.classList.add("li-active");
}