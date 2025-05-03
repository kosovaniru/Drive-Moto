$(function() {
  $(".top__slider").slick({
    dots: true,
    arrows: true,
    prevArrow: '<button class="top__btn top__btn--prev"><img class="top__btn-img" src="images/icons/arrow.svg" alt="Стрілка слайдера наліво"></button>',
    nextArrow: '<button class="top__btn top__btn--next"><img class="top__btn-img" src="images/icons/arrow.svg" alt="Стрілка слайдера направо"></button>'
  })
  $(".tabs__item").on("click", function(e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tabs__item--active");
    $($(this).parent().siblings().find('.tabs__content-item')).removeClass("tabs__content-item--active");
    $(this).addClass("tabs__item--active");
    $($(this).children().attr('href')).addClass("tabs__content-item--active")
  })

  $('.offering-card__favorite').on('click', function() {
    $(this).toggleClass('offering-card__favorite--active')
  }),

  $(".item-slider").slick({
    arrows: true,
    slidesToShow: 4,
    prevArrow: '<button class="item-slider__btn item-slider__btn--prev"><img src="images/icons/item-arrow.svg" alt="" class="item-slider__arrow item-slider__arrow--prev"></button>',
    nextArrow: '<button class="item-slider__btn item-slider__btn--next"><img src="images/icons/item-arrow.svg" alt="" class="item-slider__arrow item-slider__arrow--next"></button>'
  })

  $('.catalog__filter-btnform').on('click', function() {
    $('.catalog__filter-btnform').removeClass('catalog__filter-btngrid--active', 'catalog__filter-btnline--active')
    $('.catalog__inner-list').removeClass('catalog__inner-list--btngrid-active catalog__inner-list--btnline-active');
    if ($(this).hasClass('catalog__filter-btngrid')) {
      $('.catalog__inner-list').toggleClass('catalog__inner-list--btngrid-active')
    } else {
      $(this).addClass('catalog__filter-btnline--active')
      $('.catalog__inner-list').toggleClass('catalog__inner-list--btnline-active')
    }
  })

  $('.catalog__aside-btn').on('click', function() {
    $('.catalog__aside-btn').removeClass('catalog__aside-btn--active')
    $(this).addClass('catalog__aside-btn--active')
    $('.catalog__aside-content').removeClass('catalog__aside-content--active')
    if ($(this).hasClass('catalog__aside-model')) {
      $('.catalog__aside-content--model').addClass('catalog__aside-content--active')
    } else {
      $('.catalog__aside-content--param').addClass('catalog__aside-content--active')
    }
  })

  $('.catalog__aside-title').on('click', function() {
    $(this).toggleClass('catalog__aside-title--not-active')
    $($(this).siblings()).toggleClass('catalog__aside-box--not-active')
  })

  $('.catalog__aside-input, .catalog__filter-select, .catalog__aside-select-box').styler();
})