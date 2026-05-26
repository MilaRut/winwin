const details = document.querySelectorAll('details');
const showMoreButton = document.querySelector('.faq__button');

function hideDetailsonMobile() {
  if (window.innerWidth < 768) {
    details.forEach((detail, index) => {
      if (index >= 5) {
        detail.style.display = 'none';
      }
    });
  }
}

function showDetailsonMobile() {
  if (window.innerWidth < 768) {
    details.forEach((detail, index) => {
      if (index >= 5) {
        detail.style.display = 'block';
      }
    });
  }
}

function showAllDetailsOnResize() {
  if (window.innerWidth >= 768) {
    details.forEach((detail) => {
      detail.style.display = 'block';
    });
  } else {
    if (showMoreButton && !showMoreButton.classList.contains('is-active')) {
      hideDetailsonMobile();
    }
  }
}

function handleShowMoreClick() {
  if (!showMoreButton) {
    return;
  }

  showMoreButton.addEventListener('click', () => {
    if (showMoreButton.classList.contains('is-active')) {
      showMoreButton.classList.remove('is-active');
      hideDetailsonMobile();
    } else {
      showMoreButton.classList.add('is-active');
      showDetailsonMobile();
    }
  });
}

function initResizeHandler() {
  window.addEventListener('resize', () => {
    showAllDetailsOnResize();
  });
}

export { hideDetailsonMobile, handleShowMoreClick, initResizeHandler };
