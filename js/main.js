// $('.carusel').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     // variableWidth: true,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     adaptiveHeight: true,
//     centerPadding: '0px',
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 // infinite: true,
//                 // dots: true
//             }
//         },
//         {
//             breakpoint: 800,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,

//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });
// lis carusel slick-initialized slick-slider

let burgerMenu = document.querySelector(".burgermenu");
let setiNav = document.querySelector(".navbar-mbile");

burgerMenu.addEventListener("click" , function(){
    setiNav.classList.toggle("navbar-mbile-show");
    document.body.classList.toggle("body-show");
})

$('.carusel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                // arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});