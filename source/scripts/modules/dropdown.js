const triggers = document.querySelectorAll('.js-dropdown-trigger');

function openMenu(el1, el2) {
  el1.classList.add('is-active');
  el2.classList.add('is-active');
}

function closeMenu(el1, el2) {
  el1.classList.remove('is-active');
  el2.classList.remove('is-active');
}

function showDropdownList() {
  triggers.forEach((el) => {
    const currentEl = el;
    const dataId = currentEl.getAttribute('data-id');
    const currentContent = document.querySelector(dataId);
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (!currentContent.classList.contains('is-active')) {
        openMenu(currentContent, currentEl);
      } else {
        closeMenu(currentContent, currentEl);
      }
    });
    document.addEventListener('click', (e) => {
      const isLangSwitcher = e.target.closest('.lang-switcher');
      const isBody = e.target === document.body;

      if (isLangSwitcher) {
        return;
      }

      if (isBody) {
        closeMenu(currentContent, currentEl);
      }

      if (currentContent.classList.contains('is-active') && e.target !== el && !el.contains(e.target) && currentContent.contains(e.target)) {
        closeMenu(currentContent, currentEl);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu(currentContent, currentEl);
      }
    });
  });
}

export { showDropdownList };
