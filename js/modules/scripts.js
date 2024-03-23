// text-field
(() => {
  const fields = document.querySelectorAll('.text-field');
  if (fields.length > 0) {
    fields.forEach((field) => {
      const innerField = field.querySelector('input, textarea');

      innerField.addEventListener('focus', () => {
        field.classList.add('_focus');
      });

      innerField.addEventListener('blur', () => {
        field.classList.remove('_focus');
      });
    });
  }
})();

// reviews swiper
new Swiper('.reviews-slider.swiper', {
  grabCursor: true,
  slidesPerView: 1.06,
  spaceBetween: 8,
  speed: 300,

  pagination: {
    el: '.reviews-slider-pagination.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-arrow.swiper-button-next',
    prevEl: '.reviews-slider-arrow.swiper-button-prev',
  },

  breakpoints: {
    1600: {
      spaceBetween: 80,
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 2,
      spaceBetween: 60,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
  },
});
