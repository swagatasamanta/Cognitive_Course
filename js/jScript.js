
//-----------------------------------------------------------------------------------------
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar1');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// Scroll js
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// var swiper = new Swiper(".ck", {
//     spaceBetween:20,
//     loop:true,
//     autoplay: {
//         delay:2500,
//         disableOnInteraction:false,
//     },
//     breakpoints:{
//         640:{
//             slidesPerview:1,
//         },
//         768:{
//             slidesPerview:2,
//         },
//         1024:{
//             slidesPerview:3,
//         },
//     }
// });




//==================FAQs show/hide js================
// const faqs = document.querySelectorAll('.faq');

// faqs.forEach(faq => {
//     faqs.addEventListener('click', () => {
//         faq.classList.toggle('open');

//         //change icon
//         const icon = faq.querySelector('.faq_icon i');
//         if(icon.className === 'uil uil-plus'){
//             icon.className = 'uil uil-minus';
//         }else{
//             icon.className = 'uil uil-plus';
//         }
//     })
// })

//=================New Faqs==========
// const accordion = document.getElementsByClassName('contentBx');

// for(i=0;i<accordion.length;i++ ){
//     accordion[i].addEventListener('click', () =>{
//         accordion[i].classList.toggle('active');
//     });
// }


// menu.addEventListener('click',() =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

//==================Review Slider js================


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{ 
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    }

});

