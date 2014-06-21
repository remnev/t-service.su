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
});