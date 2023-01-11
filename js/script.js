// бургер
const burger = document.querySelectorAll('.burger');
const menu = document.querySelector(".menu-burger")
const body = document.body;

burger.forEach((event) => {
    event.addEventListener('click', () => {
        menu.classList.toggle('menu-show');
      });
})

// слайдер
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },

    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        560: {
            slidesPerView: 2,
        },

        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
    },
})

