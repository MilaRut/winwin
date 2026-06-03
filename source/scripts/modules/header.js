const header = document.querySelector('.header');

function setHeaderOnScroll() {
  const SCROLL_THRESHOLD = 50;

  window.addEventListener('scroll', () => {

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition < SCROLL_THRESHOLD) {
      header.classList.add('header--default');
    } else {
      header.classList.remove('header--default');
    }
  });
}

export { setHeaderOnScroll };
