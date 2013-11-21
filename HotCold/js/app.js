$(document).ready(function(){

//Last distance in array and number of tries

var lastDistance = [];
var tries = 0;

//Get a random number

var target = Math.floor(Math.random()*100+1);
console.log(target);

//Proceed with submit when click and press enter 

$('#guess_button').click(function(){
	submit();
});

$('#guess').keydown(function(e){
	console.log('Key Pressed');
	if(e.keyCode == 13){
			submit();
	}

});

//autofocus with placeholder after reset game

$('#guess')
  		.bind('focusin', function(e){
    	$(this)
    	 .data('content', $(this).val())
    	 .val('');
  	})
  		.bind('focusout', function(e){
    	if ( $(this).val() === '' ){

      	$(this).val( $(this).data('content'));
    	}
    	$(this).hide().fadeIn('fast');
 });

//submit function

function submit(){
	var guess = $('#guess').val();
	validateGuess(guess);
	}

//validate guess input for non valid input

function validateGuess(guess){
	if(guess === '' || guess < 1 || guess > 100 || !$.isNumeric(guess)){
		$('#validate').miniNotification();

		//autofocus after guess

		$('#guess').focus();
	}

//distance between guess and target and store last guess distance
	
	var distance = Math.abs(guess - target);
	tries = tries + 1;
	console.log(tries);
	$('#pastguessheadline').toggleClass('hide').hide().fadeIn('slow');

//feedback

	if(distance === 0){
		$('#target-no').html(target);
		$('#tries-no').html(tries);
			if(tries === 1){
				var triesText = $("<span id='tries-after'></span>").text('try');
				$("#tries").append(triesText);
				$('#pastguessheadline').hide();
			} else {
				var triesText = $("<span id='tries-after'></span>").text('tries');
				$("#tries").append(triesText);
				$('#pastguessheadline').hide();
				
			}
			
			$('#myModal').reveal({ // The item which will be opened with reveal
				animation: 'fade',                   // fade, fadeAndPop, none
				animationspeed: 600,                       // how fast animtions are
				closeonbackgroundclick: false,              // if you click background will modal close?
				dismissmodalclass: 'reset-button',    // the class of a button or element that will close an open modal
			});
			

			//click button with mouse to reset game

			$('#reset-button').click(function(event) {
  				$('#guess').focus();
				$("#tries-after").remove();
				$("#guess-container").empty();
				$('#pastguessheadline').hide();
				tries = 0;
				target = Math.floor(Math.random()*100+1);
				console.log(target);
				lastDistance.length = 0;
			});


	} else if (lastDistance == false){
	console.log("1st");
	lastDistance.push(distance);
	console.log(lastDistance);
	firstGuess(guess);

	//multiple guess
	
	} else {
	multiGuess(distance, guess);
	}
}

// 1st guess

	function firstGuess(guess){
		if(guess > target){
		$("#validate.high").miniNotification();
		var container = $("<div id='guess-container'></div>");
		var pastGuess = $("<div class='pastguess'></div>").html(guess);
		var feedback = $("<span class='firstguess'></span>").text("Guess too high");
		$("#guess-container").append(container,pastGuess,feedback).hide().fadeIn('slow');

		//autofocus after guess

  		$('#guess').focus();

		} else {
		$("#validate.lower").miniNotification();
		var container = $("<div id='guess-container'></div>");
		var pastGuess = $("<div class='pastguess'></div>").html(guess);
		var feedback = $("<span class='firstguess'></span>").text("Guess too low");
		$("#guess-container").append(container,pastGuess,feedback).hide().fadeIn('slow');
	
		//autofocus after guess

		$('#guess').focus();
	}
}

// Multiple guess

function multiGuess(distance, guess){
	if(distance > lastDistance[lastDistance.length - 1]){
		lastDistance.push(distance);
		console.log(lastDistance);
		$("#validate.colder").miniNotification();
		var container = $("<div id='guess-container'></div>");
		var pastGuess = $("<div class='pastguess'></div>").html(guess);
		var feedback = $("<span class='firstguess guesshigh'></span>").text("Getting colder");
		$("#guess-container").prepend(container,pastGuess,feedback).hide().fadeIn('slow');
		
		//autofocus after guess

		$('#guess').focus();
	} else if (distance === lastDistance[lastDistance.length - 1]){
		lastDistance.push(distance);
		console.log(lastDistance);
		$("#validate.same").miniNotification();
		var container = $("<div id='guess-container'></div>");
		var pastGuess = $("<div class='pastguess'></div>").html(guess);
		var feedback = $("<span class='sameguess'></span>").text("Not hotter nor colder");
		$("#guess-container").prepend(container,pastGuess,feedback).hide().fadeIn('slow');
		
		//autofocus after guess

		$('#guess').focus();
	} else {
		lastDistance.push(distance);
		console.log(lastDistance);
		$("#validate.hotter").miniNotification();
		var container = $("<div id='guess-container'></div>");
		var pastGuess = $("<div class='pastguess'></div>").html(guess);
		var feedback = $("<span class='firstguess guesslow'></span>").text("Getting hotter");
		$("#guess-container").prepend(container,pastGuess,feedback).hide().fadeIn('slow');
		
		//autofocus after guess

		$('#guess').focus();
	}
}

//reset game



$('#reset').click(function(event) {
  		//$('#guess').focus();
		event.preventDefault();
		$("#guess-container").empty();
		$('#pastguessheadline').hide();
		tries = 0;
		target = Math.floor(Math.random()*100+1);
		console.log(target);
		lastDistance.length = 0;
});


});



