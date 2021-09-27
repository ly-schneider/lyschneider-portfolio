const textFade = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20}
    ]
}

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);