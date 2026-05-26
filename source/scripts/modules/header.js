const header = document.querySelector('.header');
const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.header__nav-btn');

function setHeaderOnScroll() {
  let prevScrollPosition = 0;
  const SCROLL_THRESHOLD = 50;

  window.addEventListener('scroll', () => {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < SCROLL_THRESHOLD) {
      header.classList.add('header--default');
    } else {
      header.classList.remove('header--default');
    }

    if (currentScrollPosition > prevScrollPosition) {
      header.classList.add('header--collapsed');
      if (nav.classList.contains('is-active')) {
        nav.classList.remove('is-active');
      }
      if (navBtn.classList.contains('is-active')) {
        navBtn.classList.remove('is-active');
      }
    } else {
      header.classList.remove('header--collapsed');
    }
    prevScrollPosition = Math.max(0, currentScrollPosition);
  });
}

export { setHeaderOnScroll };
