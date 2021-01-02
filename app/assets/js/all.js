$(document).ready(() => {
  // Navbar Toggler
  $('.js-navbarToggler').on('click', function(e) {
    e.preventDefault();
    $('.navbar').toggleClass('navbar--active');
  });

  // Drowpdown
  $('.js-drowpdownToggler').on('click', function(e) {
    e.preventDefault();
    $(this).next('.dropdown__content').slideToggle();
  });

  // open Modal
  $('.js-openModal').on('click', function(e) {
    e.preventDefault();
    $('body').attr('style', 'overflow: hidden');
    $('.modal-wrap').attr('style', 'display: flex');
    $('.step1').attr('style', 'display: flex');
  });

  $('.js-toggleStep').on('click', function(e) {
    e.preventDefault();
    const action = $(this).data('action');
    const num = $(this).data('num');
    let stepNum = Number(num);
    console.log(stepNum);
    if (action == 'return') {
      stepNum -= 1; 
    } else {
      stepNum += 1;
    }
    $(`.step${stepNum}`).attr('style', 'display: flex');
    $(this).parents('.step').attr('style', 'display: none');
  });

  // close Modal
  $('.modal-wrap').on('click', function(e) {
    if (e.target.className == 'modal-wrap' ) {
      $('body').attr('style', 'overflow: auto');
      $('.modal-wrap').attr('style', 'display: none');
      $('.step').attr('style', 'display: none');
    }
  });
});

// AOS
AOS.init();

// Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
})