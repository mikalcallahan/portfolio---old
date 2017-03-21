$(document).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $("#toggleicon").toggleClass("open");
        $("fa-genderless").toggleClass("open");
    });
    $('#menuitems').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $("#toggleicon").toggleClass("open");
        $("fa-genderless").toggleClass("open");
    });
});
