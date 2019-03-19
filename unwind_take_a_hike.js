// Sometimes we need to allow ourselves to step back from reality and give ourselves a few minutes to pause our mental RAM.
// As someone who experiences anxiety, along with a large part of the population, I aim to make a small applicaiton that will 
// take someone through a short walk, hike, etc through a kind of park that they roll. The user will need six different dice
// with different numbers of sides. The value of the side that is rolled will decide the paths taken in the game. The game will
// end at the conclusion of the path. The goal of this game is that it's short enough that it can fit into a short break and 
// long enough to help ease the user's mind.

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5; 
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;
let num10 = 10;

function initialPrompt(){
	let question = prompt("Please enter your stress score.");



}

function rollDie(max){
	let roll = Math.floor(Math.random()* max + 1);
	return roll;
	

}

	switch(rollDie(10)){
		case num1:
		case num2:
		case num3:
			alert("Take three deep breaths.");
			break;
		case num4:
		case num5:
		case num6:
			alert("Take four deep breaths.");
			break;
		case num7:
		case num8:
		case num9:
		case num10:
			alert("Take five deep breaths.")
			break;
	}

initialPrompt();