$(document).ready(function() {
    /*	- toggle button toggles between active and inactive
    	- menu toggles between open and closed
    */
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $("#toggleicon").toggleClass("open");
        $("fa-genderless").toggleClass("open");
    });
    /*	when a menu item is clicked:
		- toggle gets loses active status
    	- menu gets set to closed
    */
    $('#menuitems').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $("#toggleicon").toggleClass("open");
        $("fa-genderless").toggleClass("open");
    });
});

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('#scrollup').affix({
        offset: {
            top: 150
        }
    });
});
