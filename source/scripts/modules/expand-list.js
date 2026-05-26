const expandBtn = document.querySelector('.dev__prices-expand-btn');
const lists = document.querySelectorAll('.dev__prices-sublist');
const expandBtnsMob = document.querySelectorAll('.dev__expand-mob');

function expandList() {
  if (!expandBtn) {
    return;
  }

  expandBtn.addEventListener('click', () => {
    lists.forEach((list) => {
      list.classList.add('is-expanded');
    });
  });

  expandBtnsMob.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.add('is-active');
    });
  });
}

export {expandList};
