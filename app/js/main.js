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
})