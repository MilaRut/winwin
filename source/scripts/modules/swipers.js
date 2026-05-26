const rewardsSwiper = document.querySelector('#rewards-swiper');
const rulesSWiper = document.querySelector('#rules-swiper');

function initRewardsSwiper() {
  const swiper = new Swiper(rewardsSwiper, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        spaceBetween: 40,
        speed: 6000,
      },
    },
  });
}

function initRulesSwiper() {
  if (window.innerWidth < 768) {
    const swiper = new Swiper(rulesSWiper, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      speed: 500,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1280: {
          spaceBetween: 40,
        },
      },
    });
  }
}

export { initRewardsSwiper, initRulesSwiper };
