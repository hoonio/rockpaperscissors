const print = (it) => {
	console.log(it);
}

const resetGame = () => {
  document.getElementById("message").innerHTML = "New game";
	document.getElementById("reset").classList.add("hidden");
};

const playerMove = (playerChoice) => {
	document.getElementById("message").innerHTML = "You chose " + playerChoice;
	document.getElementById("reset").classList.remove("hidden");
	const playButtons = document.getElementsByClassName("play-choice");
	console.log(playButtons)
	// for each (const button in playButtons) {
	// 	button.classList.add("hidden");
	// }
}

module.exports = {print, resetGame, playerMove}
