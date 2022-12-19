// Masonry Grid
var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

// Navbar Collapse
const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
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

const showMoreBtn = document.getElementById("showMoreBtn");
const showMoreBtnParent = showMoreBtn.parentElement;
const showMoreParent = document.getElementById("image-container");
const showArr = [
    '<div class="col-lg-8 mb-4 mb-lg-0"><a href="/icf-bern/"><img src="/img/gallery/icf-bern-2.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0"><a href="/icf-bern/"><img src="/img/gallery/icf-bern-3.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a><a href="/icf-bern/"><img src="/img/gallery/icf-bern-4.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0"><a href="/icf-bern/"><img src="/img/gallery/icf-bern-5.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0"><a href="/icf-bern/"><img src="/img/gallery/icf-bern-6.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0"><a href="/icf-bern/"><img src="/img/gallery/icf-bern-7.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>',

    '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-4.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-6.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-2.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-1.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-3.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/ragnar/"><img src="/img/gallery/ragnar-5.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>',

    '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/wedding-xenia-joris/"><img src="/img/gallery/wedding-1.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/wedding-xenia-joris/"><img src="/img/gallery/wedding-2.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/wedding-xenia-joris/"><img src="/img/gallery/wedding-3.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/lager/"><img src="/img/gallery/lager-4.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/lager/"><img src="/img/gallery/lager-5.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/lager/"><img src="/img/gallery/lager-3.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/lager/"><img src="/img/gallery/lager-8.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
    + '<div class="col-lg-4 mb-4 mb-lg-0">'
    + '<a href="/lager/"><img src="/img/gallery/lager-9.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a>'
    + '<a href="/lager/"><img src="/img/gallery/lager-5.jpg" alt="Cape May" class="w-100 shadow-1-strong rounded mb-4"></a></div>'
]

let count = 0;
showMoreBtn.addEventListener("click", () => {
    showMoreBtnParent.remove();
    showMoreParent.innerHTML += showArr[count];
    if (count < 2) {
        showMoreParent.appendChild(showMoreBtnParent)
    }
    count++;
}) 