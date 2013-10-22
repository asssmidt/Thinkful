$(document).ready(function() {
    $('#basecampbox').hover(function() {
    	$('#basecamp-cta').toggleClass('hide');
    	$('#default-cta').toggleClass('hide');
    });
    $('#highrisebox').hover(function() {
    	$('#highrise-cta').toggleClass('hide');
    	$('#default-cta').toggleClass('hide');
    });
    $('#campfirebox').hover(function() {
    	$('#campfire-cta').toggleClass('hide');
    	$('#default-cta').toggleClass('hide');
    });
});