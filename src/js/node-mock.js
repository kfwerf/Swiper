if (typeof window === 'undefined') {
  Swiper = function() {
    'use strict';
    return function() {
    };
  };
} else {
  window.Swiper = Swiper;
}