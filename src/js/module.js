const print = (it) => {
	console.log(it);
}

const resetGame = () => {
  document.getElementById("message").innerHTML = "New game";
	toggleButtons();
};

const playerMove = (playerChoice) => {
	document.getElementById("message").innerHTML = "You chose " + playerChoice;
	toggleButtons();
}

const toggleButtons = () => {
	const buttons = document.getElementsByTagName("button");
	for (var i=0; i<buttons.length; i++){
		const button = buttons[i];
		button.classList.toggle("hidden");
	}
}

module.exports = {print, resetGame, playerMove, toggleButtons}
