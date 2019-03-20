// Sometimes we need to allow ourselves to step back from reality and give ourselves a few minutes to pause our mental RAM.
// As someone who experiences anxiety, along with a large part of the population, I aim to make a small applicaiton that will 
// take someone through a short walk, hike, etc through a kind of park that they roll. The user will need six different dice
// with different numbers of sides. The value of the side that is rolled will decide the paths taken in the game. The game will
// end at the conclusion of the path. The goal of this game is that it's short enough that it can fit into a short break and 
// long enough to help ease the user's mind.


function initialPrompt(){
	let stressPoints = prompt("Please enter your stress score. A suggested point value is between 15 and 30 points.");
	let currentPoints = Math.floor(parseInt(stressPoints));	
	
	
	alert("Roll a virtual nine sided die to see how many breaths to take")
	
	nineSided();

	let result9SidedDie = rollDie(9);
	nineSided(result9SidedDie);
	currentPoints = pointCalc();
	console.log("Your current score is: " + newScore);

	
	fiveSided();

	fourSided();

	threeSided();

	eightSided();

	sixSided();	

	endAlert();
}

initialPrompt();


function rollDie(max){
	let roll = Math.floor(Math.random()* max + 1);
	console.log("You rolled: " + roll);
}

function rollTwoDice(max){
	let totalRoll = (Math.floor(Math.random()* max + 1)* 2);
	console.log("You rolled: " + totalRoll);
}

function pointCalc(roll, currentScore){
	let newScore = currentScore - roll;
	console.log("Your current stress score has lowered to:", newScore)
	return newScore;
}

function nineSided(roll){
	
	if (roll <= 3){
		alert("Take three deep breaths.");
	}
	else if (roll < 7){
		alert("Take four deep breaths.");
		console.log(pointCalc());
	}
	else{
		alert("Take five deep breaths.");
		console.log(pointCalc());
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
		alert("");
	}
	else if (roll == 4){
		alert("Imagine yourself up north sitting on the dock of a small lake.");
	}
	else{
		alert("Imagine yourself standing in a national park.");
	}
}

function fourSided(roll){
	
	if (roll < 3){
		alert("Early afternoon, 2 pm");
	}
	else if (roll <= 4){
		alert("Noon");
	}
	else if (roll < 7){
		alert("Late morning, 9:30 am");
	}
	else{
		alert("Early morning, 7 am");
	}

}

function threeSided(roll){
	
	if (roll < 3){
		alert("75 degrees with sporadic clouds.");
	}
	else if (roll <= 4){
		alert("79 degrees and sunny");
	}
	else{
		alert("82 degrees and lightly cloudy with a cool breeze.");
	}
}

function eightSides(roll){
	
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

function endAlert(){
	let finalScore = newScore;

	if (newScore <= 0){
		alert("Congratulations! You rolled away all of your stress points!")
	}
	else{
		alert("Thanks for playing! It looks like you might need some more mental space because you still have" + finalScore + " points left. Feel free to play again!")
	}