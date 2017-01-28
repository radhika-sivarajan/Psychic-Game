
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss  = 0;
var guessLeft = 9;
var computerChoice = options[Math.floor(Math.random() * options.length)];
var userLetters = new Array();

window.onkeydown = function(event) {	    	

    var scoreboard;
    var userGuess = event.key.toLowerCase();	    
	guessLeft--;
	userLetters.push(userGuess);
	

	//If key pressed is an alphabet
	if (event.keyCode >= 65 && event.keyCode <= 90){

	
		//If user guess is correct
		if(userGuess==computerChoice){
			win++;	

			//Reset values of user input array, guessleft and computer choose another letter
			userLetters.splice(0,userLetters.length);	
			guessLeft = 9;
			computerChoice = options[Math.floor(Math.random() * options.length)];

    	}

    	//Update scoreboard
    	scoreboard = "Wins: " + win + "<br>Loss: " + loss + "<br>Guess left: " + guessLeft + "<br>Your gues so far " + userLetters;
    	document.getElementById("score").innerHTML = scoreboard;
    	//console.log(computerChoice);
			
		//If guess left is 0
		if (guessLeft<1){
			loss++;

			//Reset values of user input array, guessleft and computer choose another letter
			userLetters.splice(0,userLetters.length);
			guessLeft = 9;
			computerChoice = options[Math.floor(Math.random() * options.length)];

		}

		//Update scoreboard
		scoreboard = "Wins: " + win + "<br>Loss: " + loss + "<br>Guess left: " + guessLeft + "<br>Your gues so far " + userLetters;
		document.getElementById("score").innerHTML = scoreboard;		
		//console.log(computerChoice);
	}

};

