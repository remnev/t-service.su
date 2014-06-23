$(function() {
    var $categoriesPopup = $('.categories-popup'),
        popupTimeout;

    // disable a hover-behaviour if there is a mobile browser
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return;
    }

    // the services item hover at top menu
    $('.nav-links li:has(a[href="/services/"])').hover(
        function() {
            $categoriesPopup
                .css('left', $(this).offset().left-24)
                .show();
        }, 
        function() {
            popupTimeout = setTimeout(function() {
                $categoriesPopup.hide();
            }, 1000);
        }
    );

    $categoriesPopup.hover(
        function() {
            clearTimeout(popupTimeout);
        },
        function() {
            setTimeout(function() {
                $categoriesPopup.hide();
            }, 200)
        }
    );
});