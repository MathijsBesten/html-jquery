$(document).ready(function () {
    var actiefA = false;
    var actiefB = false;
    var actiefC = false;
    var actiefD = false;
    var actiefE = false;

    var a1Info = "qqqqqqqqwertyuioplkjhgfdsawertyuiol;,mnbvcxsaASDFG";
    var a2Info = "vewbubyihgbyejbgfvyaeufyuaehksbfyibesufeayifbabfuekjhbfhsajbsuihebiusbfesuibfiusbfuiebfuiesbfuisbfuesblfuieslbfuisbefuisbfuibuifbeuiebufibedsuifbeuisbfuibfuisbfisbfeuibf";
    var a3Info = "Test3";

    var target = null;

    $("li").click(function () {
        $(".proces").css({ "background-color": "gray" });
        $("." + this.textContent).css({ "background-color": "green", "z-index": "2"});
    });
    $("#a1, #a2, #a3").click(function () {
        target = $(event.target);
        $("#bb").fadeOut("fast");
        actiefB = false;
        $("#cc").fadeOut("fast");
        actiefC = false;
        $("#dd").fadeOut("fast");
        actiefD = false;
        $("#ee").fadeOut("fast");
        actiefE = false;

        if (target.is("#a1")) {
            $("#mainWrapper").css({ "margin-top": "200px" });
            $("#aa").fadeIn("fast");
            $("#ainfo").text(a1Info);
            actiefA = true;
        }
        else if(target.is("#a2")) {
            $("#mainWrapper").css({ "margin-top": "200px" });
            $("#aa").fadeIn("fast");
            $("#ainfo").text(a2Info);
            actiefA = true;
        }
        else if(target.is("#a3")) {
            $("#mainWrapper").css({ "margin-top": "200px" });
            $("#aa").fadeIn("fast");
            $("#ainfo").text(a3Info);
            actiefA = true;
        }
    });
    $("#b1, #b2, #b3").click(function () {
            $("#aa").fadeOut("fast");
            actiefA = false;
            $("#cc").fadeOut("fast");
            actiefC = false;
            $("#dd").fadeOut("fast");
            actiefD = false;
            $("#ee").fadeOut("fast");
            actiefE = false;

            $("#mainWrapper").css({ "margin-top": "100px" })
            $("#bb").fadeIn("fast");
            actiefB = true;
    });
    
    $("#c1, #c2, #c3").click(function () {
        $("#aa").fadeOut("fast");
        actiefA = false;
        $("#bb").fadeOut("fast");
        actiefB = false;
        $("#dd").fadeOut("fast");
        actiefD = false;
        $("#ee").fadeOut("fast");
        actiefE = false;

        $("#mainWrapper").css({ "margin-top": "100px" })
        $("#cc").fadeIn("fast");
        actiefC = true;
    });
    $("#d1, #d2, #d3").click(function () {
        $("#aa").fadeOut("fast");
        actiefA = false;
        $("#bb").fadeOut("fast");
        actiefB = false;
        $("#cc").fadeOut("fast");
        actiefC = false;
        $("#ee").fadeOut("fast");
        actiefE = false;

        $("#mainWrapper").css({ "margin-top": "100px" })
        $("#dd").fadeIn("fast");
        actiefD = true;
    });
    $("#e1, #e2, #e3").click(function () {
        $("#aa").fadeOut("fast");
        actiefA = false;
        $("#bb").fadeOut("fast");
        actiefB = false;
        $("#cc").fadeOut("fast");
        actiefC = false;
        $("#dd").fadeOut("fast");
        actiefD = false;

        $("#mainWrapper").css({ "margin-top": "100px" })
        $("#ee").fadeIn("fast");
        actiefE = true;
    });
});
