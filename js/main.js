let burgerMenu = document.querySelector(".burgermenu");
let setiNav = document.querySelector(".navbar-mobile");

burgerMenu.addEventListener("click" , function(){
    setiNav.classList.toggle("navbar-mobile-show");
    burgerMenu.classList.toggle("burgermenu-show");
    document.body.classList.toggle("body-show");
})

$('.carusel-js').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    variableWidth: true,
    autoplay:true,
    autoplaySpeed:3000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});