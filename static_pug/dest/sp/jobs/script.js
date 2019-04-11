"use strict";

$(function () {
  var test = function test() {
    console.log('test');
  }; // interview


  (function () {
    var galleryThumbs = new Swiper('.js-swiper-interview-thum', {
      spaceBetween: 8,
      slidesPerView: 6,
      // loop: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.js-swiper-interview-main', {
      loop: true,
      preloadImages: false,
      lazyLoading: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  })();
});