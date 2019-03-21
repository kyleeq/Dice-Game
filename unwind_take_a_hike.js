// Sometimes we need to allow ourselves to step back from reality and give ourselves a few minutes to pause our mental RAM.
// As someone who experiences anxiety, along with a large part of the population, I aim to make a small applicaiton that will 
// allow the user to use all their senses to visualize a uniquely relaxing scenario. The user will need six different dice
// with different numbered sides. The value of the rolled side will decide the path taken in the game. The game will
// end at the conclusion of the path. The goal of this game is that it's short enough that it can fit into a short break and 
// long enough to help ease the user's mind. If the user has a higher "stress score" it is suggested that they play again.
// However, if the user rolls away all of their stress points by the end of six rounds, they have "won" by taking just 
// enough time out of their day to gain mental space.

"use strict";

function gameLoop(initialAlert, rollResult, rollAlert, scoreAlert){
	alert("Let's take some time out of our day to do a little interactive meditation.");
	let stressPoints = prompt("Please rate your stess score between 0 and 42 and enter the number in the box below.");
	let currentPoints = Math.floor(parseInt(stressPoints));
	let newScore;
		if (isNaN(stressPoints) == true){
			alert("Nice try but we're going to need a number for this exercise!");
			gameLoop();
			return;
		}
		
	function nineSided(rollResult){
		initialAlert = alert("Roll a virtual nine sided die to see how many breaths to take.");
		rollResult = rollDie(9);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult <= 3){
			alert("Take three deep breaths.");
		}
		else if (rollResult < 7){
			alert("Take four deep breaths.");
		}
		else{
			alert("Take five deep breaths.");
		}

		newScore = pointCalc(rollResult, currentPoints);
		scoreAlert = alert("Your current score is: " + newScore);
	}


	function fiveSided(rollResult){
		initialAlert = alert("Roll a virtual five sided die to see where we will be visualizing ourself.");
		rollResult = rollDie(5);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult == 1){
			alert("Imagine sitting in a city park.");
		}
		else if (rollResult == 2){
			alert("Imagine yourself sitting in a park with a pond.");
		}
		else if (rollResult == 3){
			alert("Imagine yourself doing something relaxing");
		}
		else if (rollResult == 4){
			alert("Imagine yourself up north sitting on the dock of a small lake.");
		}
		else{
			alert("Imagine yourself standing in a national park.");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function fourSided(rollResult){
		initialAlert = alert("Roll a virtual  pair of four sided dice...");
		rollResult = rollTwoDice(4);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult < 3){
			alert("Early afternoon, 2 pm");
		}
		else if (rollResult <= 4){
			alert("Noon");
		}
		else if (rollResult < 7){
			alert("Late morning, 9:30 am");
		}
		else{
			alert("Early morning, 7 am");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function threeSided(rollResult){
		initialAlert = alert("Roll a virtual pair of three sided dice...");
		rollResult = rollTwoDice(3);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult < 3){
			alert("75 degrees with sporadic clouds.");
		}
		else if (rollResult <= 4){
			alert("79 degrees and sunny");
		}
		else{
			alert("82 degrees and lightly cloudy with a cool breeze.");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function eightSided(rollResult){
		initialAlert = alert("Roll a virtual eight sided die...");
		rollResult = rollDie(8);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult % 2 == 0){
			alert("Cup of coffee.");
		}
		else{
			alert("Cup of tea.");
		}

		newScore =  pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}


	function sixSided(rollResult){
		initialAlert = alert("Roll a virtual six sided die...");
		rollResult = rollDie(6);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult == 1){
			alert("Plane overhead");
		}
		else if (rollResult == 2){
			alert("Wood pecker");
		}
		else if (rollResult == 3){
			alert("Squirrels climbing trees");
		}
		else if (rollResult == 4){
			alert("Birds singing");
		}
		else if (rollResult == 5){
			alert("Rustling of trees and bushes");
		}
		else{
			alert("Crickets");
		}

		newScore = pointCalc(rollResult, newScore);
	}

	nineSided();
	fiveSided();
	fourSided();
	threeSided();
	eightSided();
	sixSided();
	endAlert(newScore);

	function endAlert(newScore){

		if (newScore <= 0){
			alert("Congratulations! You rolled away all of your stress points! It looks like you have gotten enough time away.");
		}
		else{
			alert("Thanks for playing! It looks like you might need some more mental space because you still have " + newScore + " points left. Feel free to play again!");
		}
	}

	function rollDie(max){
		rollResult = Math.floor(Math.random()* max + 1);
		return rollResult;
	}

	function rollTwoDice(max){
		let die1 = rollDie(max);
		let die2 = rollDie(max);
		rollResult = die1 + die2;
		return rollResult;
	}

	function pointCalc(rollResult, currentPoints){
		let newScore = currentPoints - rollResult;
		return newScore;
	}
}
gameLoop();