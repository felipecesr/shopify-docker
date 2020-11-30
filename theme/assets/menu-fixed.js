(function () {
    'use strict'
    
    var className = 'hero-header-fixed';
    var $heroImageHeader = document.querySelector('.hero-image-header-wrap');
    var sticky = $heroImageHeader.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > sticky) {
            $heroImageHeader.classList.add(className);
        } else {
            $heroImageHeader.classList.remove(className);
        }
    });
})()