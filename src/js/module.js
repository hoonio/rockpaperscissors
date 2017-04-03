const print = (it) => {
	console.log(it);
}

const resetGame = () => {
  document.getElementById("message").innerHTML = "New game";
	document.getElementById("reset").classList.add("hidden");
	console.log('game reset');
};

module.exports = {print, resetGame}
