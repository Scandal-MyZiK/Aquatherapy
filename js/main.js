document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtns = document.querySelectorAll('.open-popup');
    const closePopup = document.querySelector('.popup__close');
    const popup = document.querySelector('.popup');

    openPopupBtns.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            popup.classList.add('active');
        });
    });

    closePopup.addEventListener('click', function (event) {
        popup.classList.remove('active');
    });

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        if (anchor.getAttribute('href')[0] === '#') {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
    }

    const slider = document.querySelector('.swiper-container');
    if (slider) {
        let mySwiper = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            centeredSlides: true,
            loop: true,
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                    centeredSlides: true,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    centeredSlides: false,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
            },
        });
    }

    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        const headerList = document.querySelector('.header-menu__list');
        headerList.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});
