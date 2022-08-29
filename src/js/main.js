
AOS.init();

//burger
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')

burger.addEventListener('click', () => {
    nav.classList.toggle('active__burger')
    burger.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 20) {
        // console.log('hi');
        header.style.background = 'rgba(165, 111, 222, 1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.194)';
    }
})


// gallery

const btnsParent = document.querySelector('.colleaction__category'),
    categoryBtn = document.querySelectorAll('.colleaction__category-btn'),
    cardsBlock = document.querySelectorAll('.cards__block');




function hideContent() {
    cardsBlock.forEach(item => {
        // item.style.display = 'none'
        // item.style.overflow = 'hidden'
        item.style.height = '0px'
        item.style.opacity = '0'
    })

    categoryBtn.forEach(item => {
        item.classList.remove('active-btn')
    })
}

function showContent(i = 0) {
    cardsBlock[i].style.height = '100%'
    cardsBlock[i].style.opacity = '1'
    categoryBtn[i].classList.toggle('active-btn')

}

hideContent()
showContent()

btnsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('colleaction__category-btn')) {
        categoryBtn.forEach((item, i) => {
            if (target == item) {
                hideContent()
                showContent(i)
            }
        })

    }
})
// slider

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// tab
const boxes = Array.from(document.querySelectorAll('.box'))
const contents = Array.from(document.querySelectorAll('.content'))
boxes.forEach((box) => {
    box.addEventListener('click', boxHandler)
})

function boxHandler(e) {

    let currentBox = e.target.closest('.box');
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle('active');

    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    }
    else {
        currentContent.style.maxHeight = 0
    }
}