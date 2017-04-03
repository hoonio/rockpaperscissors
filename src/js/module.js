const print = (it) => {
	console.log(it);
}

const resetGame = () => {
  document.getElementById("message").innerHTML = "New game";
	toggleButtons();
};

const playerMove = (playerChoice, choiceValue) => {
	const computerChoice = generateComputerMove()
	document.getElementById("message").innerHTML = compareHands(choiceValue, computerChoice);
	document.getElementById("player-move").innerHTML = "You chose " + convertValueToShape(choiceValue);
	document.getElementById("computer-move").innerHTML = "Computer chose " + convertValueToShape(computerChoice);

	toggleButtons();
};

const toggleButtons = () => {
	const buttons = document.getElementsByTagName("button");
	for (var i=0; i<buttons.length; i++){
		const button = buttons[i];
		button.classList.toggle("hidden");
	}
};

const convertValueToShape = (choiceValue) => {
	let valueString;
	switch(choiceValue) {
		case 0:
			valueString = "rock";
			break;
		case 1:
			valueString = "paper";
			break;
		default:
			valueString = "scissors";
			break;
	}
	return valueString;
}

const compareHands = (playerHand, computerHand) => {
	if (playerHand == 0 && computerHand == 2){
		return "You won";
	} else if (playerHand == 2 && computerHand == 0){
		return "You lose";
	} else if (playerHand > computerHand){
		return "You won";
	} else if (playerHand < computerHand){
		return "You lose";
	} else {
		return "It's a tie"
	}
}

const generateComputerMove = () => {
	return Math.floor(3 * Math.random());
};

module.exports = {print, resetGame, playerMove, toggleButtons}
