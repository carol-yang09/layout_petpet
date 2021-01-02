"use strict";

$(document).ready(function () {
  // Navbar Toggler
  $('.js-navbarToggler').on('click', function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('navbar--active');
  }); // Drowpdown

  $('.js-drowpdownToggler').on('click', function (e) {
    e.preventDefault();
    $(this).next('.dropdown__content').slideToggle();
  }); // open Modal

  $('.js-openModal').on('click', function (e) {
    e.preventDefault();
    $('body').attr('style', 'overflow: hidden');
    $('.modal-wrap').attr('style', 'display: flex');
    $('.step1').attr('style', 'display: flex');
  });
  $('.js-toggleStep').on('click', function (e) {
    e.preventDefault();
    var action = $(this).data('action');
    var num = $(this).data('num');
    var stepNum = Number(num);
    console.log(stepNum);

    if (action == 'return') {
      stepNum -= 1;
    } else {
      stepNum += 1;
    }

    $(".step".concat(stepNum)).attr('style', 'display: flex');
    $(this).parents('.step').attr('style', 'display: none');
  }); // close Modal

  $('.modal-wrap').on('click', function (e) {
    if (e.target.className == 'modal-wrap') {
      $('body').attr('style', 'overflow: auto');
      $('.modal-wrap').attr('style', 'display: none');
      $('.step').attr('style', 'display: none');
    }
  });
}); // AOS

AOS.init(); // Swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev'
  }
});
//# sourceMappingURL=all.js.map
