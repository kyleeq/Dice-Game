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
		initialAlert = alert("Roll a virtual nine sided die to see how many deep breaths to take.");
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
		initialAlert = alert("Roll a virtual five sided die to see where we will be, in order to form a calming picture.");
		rollResult = rollDie(5);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult == 1){
			alert("Imagine sitting comfortably on a wooden bench in a city park. You see the people passing, some pass quickly and others pass slowly. You can hear the cars as they hum by in the distance.");
		}
		else if (rollResult == 2){
			alert("Visualize yourself sitting in a park by a small pond. As the ducks swim by they leave ripples in the water.");
		}
		else if (rollResult == 3){
			alert("Imagine yourself sitting in the middle of a meadow. The flowers nearly stand at eye level.");
		}
		else if (rollResult == 4){
			alert("Visualize yourself up north in a secluded area, sitting on the dock of a small lake. The stillness can be felt deep within you.");
		}
		else{
			alert("Imagine yourself standing in a national park. The mountains can be seen in the distance. The fresh air gently blows through the grass and trees.");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function fourSided(rollResult){
		initialAlert = alert("Roll a virtual pair of four sided dice in order to know the time of day.");
		rollResult = rollTwoDice(4);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult < 3){
			alert("It's currently early afternoon, around 2 pm. The sun has a gentle and warm glow.");
		}
		else if (rollResult <= 4){
			alert("It's currently noon, the middle of the day. The sun can be seen high over head.");
		}
		else if (rollResult < 7){
			alert("It's currently late in the morning, 9:00 am. You feel the warmth of the sun on your back.");
		}
		else{
			alert("It's currently early morning, 5 am. The world seemingly has not quite woken up yet. You can taste the morning dew.");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function threeSided(rollResult){
		initialAlert = alert("Roll a virtual pair of three sided dice for the weather report.");
		rollResult = rollTwoDice(3);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult < 3){
			alert("Today the sun shows itself through sporadic clouds. A warm breeze cascades past you and through the brush.");
		}
		else if (rollResult <= 4){
			alert("Today is 79 degrees and no clouds can be found. The sky paints itself in a vibrant blue.");
		}
		else{
			alert("Although today is a little warm, 82 degrees, the cool breeze blows the whisps of clouds overhead.");
		}

		newScore = pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}

	function eightSided(rollResult){
		initialAlert = alert("Roll a virtual eight sided die for some extra warmth.");
		rollResult = rollDie(8);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult % 2 == 0){
			alert("You have a cup of hot coffee from your choice cafe in hand. You hold it close and breathe in the steam.");
		}
		else{
			alert("You have a cup of hot coffee from your choice cafe in hand. You hold it close and breathe in the steam.");
		}

		newScore =  pointCalc(rollResult, newScore);
		scoreAlert = alert("Your current score is: " + newScore);
	}


	function sixSided(rollResult){
		initialAlert = alert("Roll a virtual six sided die for some surrounding sounds.");
		rollResult = rollDie(6);
		rollAlert = alert("You rolled: " + rollResult);

		if (rollResult == 1){
			alert("You notice a plane overhead. You heard it all at once and then slowly fade into the distance.");
		}
		else if (rollResult == 2){
			alert("The squirrels can be heard as they climb trees.");
		}
		else if (rollResult == 3){
			alert("The birds sing their songs to each other. If you can, you whistle in tune with them. Whistling back in your head counts.");
		}
		else if (rollResult == 4){
			alert("You can hear the rustling of trees and bushes as the wind passes through them.");
		}
		else {
			alert("The light chirping of crickets can be heard nearby.");
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