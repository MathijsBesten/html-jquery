$(document).ready(function () {
    $('#butt').click(function () {
        $('#popup_background').fadeIn('fast');
        $('#popup_box').fadeIn('fast');
        return false;
    });
    $(this).click(function () {
        $('#popup_background').fadeOut('fast');
        $('#popup_box').fadeOut('fast');
        return false;
    });
});
