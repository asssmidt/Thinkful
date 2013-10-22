$(document).ready(function() {
    $('#basecampbox').hover(function() {
    	$('#basecamp-cta, #default-cta').toggleClass('hide');
    });
    $('#highrisebox').hover(function() {
    	$('#highrise-cta, #default-cta').toggleClass('hide');
    });
    $('#campfirebox').hover(function() {
    	$('#campfire-cta, #default-cta').toggleClass('hide');
    });
});