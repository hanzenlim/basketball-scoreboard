var isLeft = true;
var countdownTimer;


var isStarted = false;

$(document).ready(function(){


	var left = $('.left');
	var right = $('.right');

	if(typeof(Storage) !== "undefined"){
		left.text(sessionStorage.left);
		right.text(sessionStorage.right);
	}


	

	//left-37
	//right-39
	//top - 38
	// down -40
	$(window).keydown(function(event){

		if(event.which==39 || event.which == 37){
			if(isLeft){
				$('.right').addClass('highlight');
				$('.left').removeClass('highlight');
				isLeft = false;
			}
			else{
				$('.left').addClass('highlight');
				$('.right').removeClass('highlight');
				isLeft = true;
			}
		}

		//keyup - increment value by one
		if(event.which == 38){
			if(isLeft){
				var value = parseInt($('.left').text());
				value ++;
				$('.left').text(value);
				saveScore(value, isLeft);
			}
			else{
				var value = parseInt($('.right').text());
				value ++;
				$('.right').text(value);
				saveScore(value, isLeft);
			}
		}

		//keyup - decrement value by one
		if(event.which == 40){
			if(isLeft){
				var value = parseInt($('.left').text());
				
				if(value > 0)
					value --;
				$('.left').text(value);
				saveScore(value, isLeft);
			}
			else{
				var value = parseInt($('.right').text());
				
				if(value > 0)
					value --;
				$('.right').text(value);
				saveScore(value, isLeft);
			}
		}
	})

	function saveScore(score, isLeft){
		if(typeof(Storage) !== "undefined"){
			
			if(isLeft == true)
				sessionStorage.left = score;
			else
				sessionStorage.right = score;
		}
	}

	



});


function setup(){
	var min = prompt("Enter countdown timer in minutes");
	
	if(min!=null){
		this.countdownTimer = minToSec(min);
	}
}

function toggle(){
	if(!this.isStarted)
		this.isStarted = true;
	else
		this.isStarted = false;
}

function minToSec(time){
	return time * 60;
}

function formatTime(time){
	var minute = Math.floor(time / 60) ;
	var seconds = time % 60 + 0.0 ;

	return minute + ":" + seconds;
}


var time = 0,
    elapsed = '0.0';

window.setInterval(function()
{
    time += 1000;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    
    if(countdownTimer > -1 && isStarted){
    	jQuery('.timer').text(formatTime(countdownTimer));
    	countdownTimer--;
    }

}, 1000);




