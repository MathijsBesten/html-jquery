$(document).ready(function () {
    var actiefA = false;
    var actiefB = false;
    var actiefC = false;
    var actiefD = false;
    var actiefE = false;

    $("li").click(function () {
        $(".proces").css({ "background-color": "gray" });
        $("." + this.textContent).css({ "background-color": "green", "z-index": "2"});
    });
    $("#b1, #b2, #b3").click(function () {
        if (actiefB == false) {
            $("#aa").fadeOut("fast");
            actiefA = false;
            $("#cc").fadeOut("fast");
            actiefA = false;
            $("#dd").fadeOut("fast");
            actiefA = false;
            $("#ee").fadeOut("fast");
            actiefA = false;

            $("#bb").css({ "height": "100px", "width": "250px" });
            $("#bb-inside").css({ "height": "100px", "width": "270px" });
            $("#bb").fadeIn("fast");
            actiefB = true;
        }
        else {
            $("#bb").fadeOut("fast");
            actiefB = false;
        }
    });
});
