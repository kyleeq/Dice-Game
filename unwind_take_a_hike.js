// Sometimes we need to allow ourselves to step back from reality and give ourselves a few minutes to pause our mental RAM.
// As someone who experiences anxiety, along with a large part of the population, I aim to make a small applicaiton that will 
// take someone through a short walk, hike, etc through a kind of park that they roll. The user will need six different dice
// with different numbers of sides. The value of the side that is rolled will decide the paths taken in the game. The game will
// end at the conclusion of the path. The goal of this game is that it's short enough that it can fit into a short break and 
// long enough to help ease the user's mind.
"use strict";

function initialPrompt(){
	let stressPoints = prompt("Please rate your stess score between 0 and 42 and enter the number it in the box below.");
	let currentPoints = Math.floor(parseInt(stressPoints));	
	let newScore;	
	
	alert("Roll a virtual nine sided die to see how many breaths to take.");
	let resultNineSided = rollDie(9);
	alert("You rolled: " + resultNineSided);
	nineSided(resultNineSided);
	newScore = pointCalc(resultNineSided, currentPoints);
	alert("Your current score is: " + newScore);

	alert("Roll a virtual five sided die to see where we will be visualizing ourself.");
	let resultFiveSided = rollDie(5);
	alert("You rolled: " + resultFiveSided);
	fiveSided(resultFiveSided);
	newScore = pointCalc(resultFiveSided, newScore);
	alert("Your current score is: " + newScore);

	alert("Roll a virtual  pair of four sided dice...");
	let resultFourSided = rollTwoDice(4);
	alert("You rolled: " + resultFourSided);
	fourSided(resultFourSided);
	newScore = pointCalc(resultFourSided, newScore);
	alert("Your current score is: " + newScore);

	alert("Roll a virtual pair of three sided dice...");
	let resultThreeSided = rollTwoDice(3);
	alert("You rolled: " + resultThreeSided);
	threeSided(resultThreeSided);
	newScore = pointCalc(resultThreeSided, newScore);
	alert("Your current score is: " + newScore);

	alert("Roll a virtual eight sided die...");
	let resultEightSided = rollDie(8);
	alert("You rolled: " + resultEightSided);
	eightSided(resultEightSided);
	newScore = pointCalc(resultEightSided, newScore);
	alert("Your current score is: " + newScore);

	alert("Roll a virtual six sided die...");
	let resultSixSided = rollDie(6);
	alert("You rolled: " + resultSixSided);
	sixSided(resultSixSided);
	newScore = pointCalc(resultSixSided, newScore);

	endAlert(newScore);
}

initialPrompt();


function rollDie(max){
	let roll = Math.floor(Math.random()* max + 1);
	return roll;
}

function rollTwoDice(max){
	let die1 = rollDie(max);
	let die2 = rollDie(max);
	let totalRoll = die1 + die2;
	return totalRoll;
}

function pointCalc(roll, currentPoints){
	let newScore = currentPoints - roll;
	return newScore;
}

function nineSided(roll){
	
	if (roll <= 3){
		alert("Take three deep breaths.");
	}
	else if (roll < 7){
		alert("Take four deep breaths.");
	}
	else{
		alert("Take five deep breaths.");
	}
}

function fiveSided(roll){
	
	if (roll == 1){
		alert("Imagine sitting in a city park.");
	}
	else if (roll == 2){
		alert("Imagine yourself sitting in a park with a pond.");
	}
	else if (roll == 3){
		alert("Imagine yourself doing something relaxing");
	}
	else if (roll == 4){
		alert("Imagine yourself up north sitting on the dock of a small lake.");
	}
	else{
		alert("Imagine yourself standing in a national park.");
	}
}

function fourSided(totalRoll){
	
	if (totalRoll < 3){
		alert("Early afternoon, 2 pm");
	}
	else if (totalRoll <= 4){
		alert("Noon");
	}
	else if (totalRoll < 7){
		alert("Late morning, 9:30 am");
	}
	else{
		alert("Early morning, 7 am");
	}

}

function threeSided(totalRoll){
	
	if (totalRoll < 3){
		alert("75 degrees with sporadic clouds.");
	}
	else if (totalRoll <= 4){
		alert("79 degrees and sunny");
	}
	else{
		alert("82 degrees and lightly cloudy with a cool breeze.");
	}
}

function eightSided(roll){
	
	if (roll % 2 == 0){
		alert("Cup of coffee.");
	}
	else{
		alert("Cup of tea.");
	}
}

function sixSided(roll){
	if (roll == 1){
		alert("Plane overhead");
	}
	else if (roll == 2){
		alert("Wood pecker");
	}
	else if (roll == 3){
		alert("Squirrels climbing trees");
	}
	else if (roll == 4){
		alert("Birds singing");
	}
	else if (roll == 5){
		alert("Rustling of trees and bushes");
	}
	else{
		alert("Crickets");
	}
}

function endAlert(newScore){

	if (newScore <= 0){
		alert("Congratulations! You rolled away all of your stress points! It looks like you have gotten enough time away.")
	}
	else{
		alert("Thanks for playing! It looks like you might need some more mental space because you still have " + newScore + " points left. Feel free to play again!")
	}
}