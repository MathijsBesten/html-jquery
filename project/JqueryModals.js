$(document).ready(function () {
    var aa = document.getElementById("aa");
    var button = document.getElementById("butt");
    var span = document.getElementById("close");
    $("li").click(function () {
        $(".proces").css({ "background-color": "gray" });
        $("." + this.textContent).css({ "background-color": "green"});
    });
    $(span).click(function () {
        modal.style.display = "none";
    });
});