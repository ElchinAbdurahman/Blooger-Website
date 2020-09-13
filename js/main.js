//owl carousel
const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }

}

$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
    responsive:responsive
});

//click to scroll up



function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()",50);
    } else clearTimeout(scrollAnimation);
}

// AOS instance
AOS.init();