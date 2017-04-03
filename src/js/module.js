const print = (it) => {
	console.log(it);
}

const resetGame = () => {
  document.getElementById("message").innerHTML = "New game";
	toggleButtons();
};

const playerMove = (playerChoice, choiceValue) => {
	document.getElementById("message").innerHTML = "You chose " + playerChoice;
	document.getElementById("player-move").innerHTML = "You chose " + choiceValue;
	document.getElementById("computer-move").innerHTML = "Computer chose " + generateComputerMove();

	toggleButtons();
};

const toggleButtons = () => {
	const buttons = document.getElementsByTagName("button");
	for (var i=0; i<buttons.length; i++){
		const button = buttons[i];
		button.classList.toggle("hidden");
	}
};

const generateComputerMove = () => {
	return Math.floor(3 * Math.random());
};

module.exports = {print, resetGame, playerMove, toggleButtons}
