// Sometimes we need to allow ourselves to step back from reality and give ourselves a few minutes to pause our mental RAM.
// As someone who experiences anxiety, along with a large part of the population, I aim to make a small applicaiton that will 
// take someone through a short walk, hike, etc through a kind of park that they roll. The user will need six different dice
// with different numbers of sides. The value of the side that is rolled will decide the paths taken in the game. The game will
// end at the conclusion of the path. The goal of this game is that it's short enough that it can fit into a short break and 
// long enough to help ease the user's mind.


function initialPrompt(stressPoints){
	stressPoints = prompt("Please enter your stress score.");
	stressPoints = Math.floor(parseInt(stressPoints));
	console.log(stressPoints);

	let diceArray = [9, 5, 4, 3, 8, 6];
	
	let functionsArray = [nineSided(), fiveSided(), fourSided(), threeSided(), eightSided(), sixSided()]
	
	for(diceArray = 0; diceArray <= stressPoints; i++){

	function nineSided(roll){
		rollDie(9);
		functionsArray[0](9);
		pointCalcDie();
		if (roll <= 3){
			alert("Take three deep breaths.");
			console.log(pointCalcDie());}
		else if (roll < 7){
			alert("Take four deep breaths.");
			console.log(pointCalcDie());}
		else{
			alert("Take five deep breaths.");
			console.log(pointCalcDie());}
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


	// switch(rollTwoDice(4)){
	// 	case num2:
	// 		alert("Early afternoon, 2 pm");
	// 		break;
	// 	case num3:
	// 	case num4:
	// 		alert("Noon");
	// 		break;
	// 	case num5:
	// 	case num6:
	// 		alert("Late morning, 9:30 am");
	// 		break;
	// 	case num7:
	// 	case num8:
	// 		alert("Early morning, 7 am");
	// 		break;
	// }

	// switch(rollTwoDice(3)){
	// 	case num2:
	// 		alert("75 degrees with sporadic clouds.");
	// 		break;
	// 	case num3:
	// 	case num4:
	// 		alert("79 degrees and sunny");
	// 		break;
	// 	case num5:
	// 	case num6:
	// 		alert("82 degrees and lightly cloudy with a cool breeze.");
	// 		break;
	// }

	// switch(rollDie(8)){
	// 	case roll % 2 == 0:
	// 			alert("Cup of coffee.");
	// 			break;
	// 		case roll % 2 != 0:
	// 			alert("Cup of tea.");
	// 			break;
	// 	}

	// 	switch(rollDie(6)){
	// 		case num1:
	// 			alert("Plane overhead");
	// 		break;
	// 	case num2:
	// 		alert("Wood pecker");
	// 		break;
	// 	case num3:
	// 		alert("Squirrels climbing trees");
	// 		break;
	// 	case num4:
	// 		alert("Birds singing");
	// 		break;
	// 	case num5:
	// 		alert("Rustling of trees and bushes");
	// 		break;
	// 	case num6:
	// 		alert("Crickets");
	// 		break;
	// }
if (roll == 1){}
		else if (roll == ){}
		else{}


}
initialPrompt();


function rollDie(max){
	let roll = Math.floor(Math.random()* max + 1);
	console.log("You rolled:", roll);
}

function rollTwoDice(max){
	let totalRoll = (Math.floor(Math.random()* max + 1)* 2);
}

function pointCalcDie(roll){
	let currentScore = stressPoints - roll;
	console.log("Your current stress score has lowered to:", currentScore)
}