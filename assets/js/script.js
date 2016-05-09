
$(function() {
	smoothScroll(300);
});




// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$('body').css('display', 'none');

$('body').fadeIn(1000);



$('.link').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(1000, newpage);

});



function newpage() {

window.location = newLocation;

}