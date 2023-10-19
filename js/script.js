const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.header__nav-inner');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});

var swiper = new Swiper('.blog__items-swiper', {
  pagination: {
    el: '.blog__swiper-pagination',
    loop: true,
    effect: 'cards',
  },
});

document
  .querySelectorAll('.review__form-select')
  .forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector(
      '.review__form-input--select'
    );
    const dropDownList = dropDownWrapper.querySelector(
      '.review__form-select-items'
    );
    const dropDownListItems = dropDownList.querySelectorAll(
      '.review__form-select-item'
    );
    const dropDownInput = dropDownWrapper.querySelector(
      '.review__form-input-hidden'
    );

    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      this.classList.toggle('dropdown__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
      });
    });

    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
  });

Fancybox.bind('[data-fancybox]', {
  overlayColor: 'rgba(32, 35, 38, 0.70)',
  tpl: {
    closeBtn:
      '<a title="Close" class="fancybox-item fancybox-close myClose" href="javascript:;"></a>',
  },
});
