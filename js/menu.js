/*
$(document).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});
*/
/*
$(document).ready(function() {
    $('.toggle').click(function() {
        $('#menu').style.display = "block";
    });
    $('#menu').click(function() {
        $('#menu').fadeOut();
    });
});
*/
$(document).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $("#toggleicon").toggleClass("open");
        $("fa-genderless").toggleClass("open");
        //$("#toggleicon").toggleClass("fa-circle-o");
        $("#toggleicon").toggleClass("fa-circle");
        //$("#toggle").toggleClass("fa fa-circle");
        //$("#toggle").toggle();

    });
});
