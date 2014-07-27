$(function() {
    // the services-list behaviour
    $('.affix-sticky').affix({
        offset: {
            top: 202,
            bottom: function () {
                return $('#footer').outerHeight(true);
            }
        }
    });

    // set active item in the left menu
    var didScroll = false,
        $servicesSet = $('.service');

    $(window).scroll(function() {
        didScroll = true;
    }).scroll();

    setInterval(function() {
        if (didScroll) {
            didScroll = false;

            $servicesSet.each(function() {
                if (isScrolledIntoView(this)) {
                    $(this).siblings('.active').removeClass('active').end()
                           .addClass('active');

                    $('.services-list__item').has('a[href=#'+this.id+']').siblings('.active').removeClass('active').end()
                                             .addClass('active');

                    return false;
                }
            });
        }
    }, 500);

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top + 150;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
          && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
    }
});