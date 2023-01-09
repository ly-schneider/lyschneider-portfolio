// Masonry Grid
var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

// Navbar Collapse
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown)');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach(function (l) {
    l.addEventListener('click', function () {
        // avoid flickering on desktop 
        if (menuToggle.classList.contains('show')) {
            bsCollapse.toggle();
        }
    });
});