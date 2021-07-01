import Swiper, { Navigation, Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import './index.sass';

let menu = ['', '', '', '', '', ''];
Swiper.use([Navigation, Pagination, Autoplay]);
const introSwiper = new Swiper('.intro__container', {
  direction: 'vertical',
  speed: 1000,
  slidesPerView: 1,
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
  autoplay: {
    delay: 5000,
  },
});
let activeSlide = document.querySelector('div.swiper-slide-active');
let captions = document.querySelector('.swiper-caption');
let caption = activeSlide.dataset.caption;
captions.innerHTML = caption;
let updateCaptions = function() {
  if (activeSlide.hasAttribute('data-caption')) {
    captions.innerHTML = caption;
  }
};
introSwiper.on('slideChange', function() {
  updateCaptions();
});
