import Swiper, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import './index.sass';
import './index.pug';

export default () => {
  Swiper.use([Navigation, Pagination]);
  let menu = ['', '', '', '', '', ''];
  const introSwiper = new Swiper('.intro__container', {
    direction: 'vertical',
    // autoHeight: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    loopAdditionalSlides: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + menu[index] + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
