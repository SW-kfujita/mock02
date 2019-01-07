    $('.PL-btn i').click(function () {
        if ($(this).hasClass('PL-btn-active')) {
            $(this).removeClass('PL-btn-active');
            $(this).addClass('PL-btn-non');
        }
        else {
            $(this).removeClass('PL-btn-non');
            $(this).addClass('PL-btn-active');
        }
    })