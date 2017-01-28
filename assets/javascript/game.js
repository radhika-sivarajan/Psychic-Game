
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss  = 0;
var guessLeft = 9;

var computerChoice = options[Math.floor(Math.random() * options.length)];

if(guessLeft<=9){
	var userLetters = new Array();

	window.onkeydown = function(event) {	    	

	    var userGuess = event.key.toLowerCase();	    
		guessLeft--;
		userLetters.push(userGuess);
		var scoreboard;

		//If key pressed is an alphabet
		if (event.keyCode >= 65 && event.keyCode <= 90){

		
			//If key pressed is correct
			if(userGuess==computerChoice){
				win++;	

				//Reset values of user input array guessleft
				userLetters.splice(0,userLetters.length);	
				guessLeft = 9;

	    	}
	    	scoreboard = "Wins: " + win + "<br>Loss: " + loss + "<br>CC " + computerChoice+ "<br>Guess left: " + guessLeft + "<br>Your gues so far " + userLetters;
	    	document.getElementById("score").innerHTML = scoreboard;
		
				
			if (guessLeft<1){
				loss++;
				//Reset values of user input array guessleft
				userLetters.splice(0,userLetters.length);
				guessLeft = 9;
			}
			scoreboard = "Wins: " + win + "<br>Loss: " + loss + "<br>CC " + computerChoice+ "<br>Guess left: " + guessLeft + "<br>Your gues so far " + userLetters;
			document.getElementById("score").innerHTML = scoreboard;

		}

	};
	
}