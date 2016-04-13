$(document).ready(function () {
    var actiefA = false;
    var actiefB = false;
    var actiefC = false;
    var actiefD = false;
    var actiefE = false;

    var a1Info = "qqqqqqqq wertyuiop lkjhgfdsawertyuiol sdsfafs mnbvcxs aASDFG";
    var a2Info = "vew bubyihgby ejbgfvyaeufyua ehksbfyibe sufeayifbab fuekjhbf hsajbsuihe biusbfes uibfiusb fuiebfuiesbfuis bfuesblfuie slbfuis befuisb fuibuifbeuie-  bufibedsui fbe  sbfuibf uisbf isbfe uibf";
    var a3Info = "Test3";
    
    var b1Info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    var b2Info = "sdasdasads  dasa sdsda a das dsa sahbsh i hb hb iu ufsd ihk us"
    var b3Info = "test3";

    var c1Info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    var c2Info = "sdasdasads  dasa sdsda a das dsa sahbsh i hb hb iu ufsd ihk us"
    var c3Info = "test3";

    var d1Info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    var d2Info = "sdasdasads  dasa sdsda a das dsa sahbsh i hb hb iu ufsd ihk us"
    var d3Info = "test3";

    var e1Info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    var e2Info = "sdasdasads  dasa sdsda a das dsa sahbsh i hb hb iu ufsd ihk us"
    var e3Info = "test3";


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

        $("#mainWrapper").css({ "margin-top": "200px" });
        $("#aa").fadeIn("fast");


        if (target.is("#a1")) {
            $("#ainfo").text(a1Info);
        }
        else if(target.is("#a2")) {
            $("#ainfo").text(a2Info);
        }
        else if(target.is("#a3")) {
            $("#ainfo").text(a3Info);
        }
        actiefA = true;
    });
    $("#b1, #b2, #b3").click(function () {
        target = $(event.target);
        console.log(target);
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

        if (target.is("#b1")) {
            $("#binfo").text(b1Info);
        }
        else if (target.is("#b2")) {
            $("#binfo").text(b2Info);
        }
        else if (target.is("#b3")) {
            $("#binfo").text(b3Info);
        }
        actiefB = true;
    });
    
    $("#c1, #c2, #c3").click(function () {
        target = $(event.target);
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

        if (target.is("#c1")) {
            $("#cinfo").text(c1Info);
        }
        else if (target.is("#c2")) {
            $("#cinfo").text(c2Info);
        }
        else if (target.is("#c3")) {
            $("#cinfo").text(c3Info);
        }
        actiefC = true;
    });
    $("#d1, #d2, #d3").click(function () {
        target = $(event.target);
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

        if (target.is("#d1")) {
            $("#dinfo").text(d1Info);
        }
        else if (target.is("#d2")) {
            $("#dinfo").text(d2Info);
        }
        else if (target.is("#d3")) {
            $("#dinfo").text(d3Info);
        }
        actiefD = true;
    });
    $("#e1, #e2, #e3").click(function () {
        target = $(event.target);
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

        if (target.is("#e1")) {
            $("#einfo").text(e1Info);
        }
        else if (target.is("#e2")) {
            $("#einfo").text(e2Info);
        }
        else if (target.is("#e3")) {
            $("#einfo").text(e3Info);
        }
        actiefE = true;
    });
    $("#asmallButton").click(function () {
        var info = target.


        $('#popup_background').fadeIn('fast');
        $('#popup_box').fadeIn('fast');
        $("#popup_info").text("Info");
        return false;
    });
});
