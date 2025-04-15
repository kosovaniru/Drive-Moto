$(function() {
  $(".top__slider").slick({
    dots: true,
    arrows: true,
    prevArrow: '<button class="top__btn top__btn--prev"><img class="top__btn-img" src="images/icons/arrow.svg" alt="Стрілка слайдера наліво"></button>',
    nextArrow: '<button class="top__btn top__btn--next"><img class="top__btn-img" src="images/icons/arrow.svg" alt="Стрілка слайдера направо"></button>'
  })
  $(".tabs__link").on("click", function(e) {
    e.preventDefault();
    $('.tabs__link').removeClass("tabs__link--active");
    $('.tabs__content-item').removeClass("tabs__content-item--active");
    $(this).addClass("tabs__link--active");
    $($(this).attr('href')).addClass("tabs__content-item--active")
  })

  $('.offering-card__favorite').on('click', function() {
    $('.offering-card__favorite').toggleClass('offering-card__favorite--active')
  }),

  $(".item-slider").slick({
    arrows: true,
    slidesToShow: 4,
  })
})