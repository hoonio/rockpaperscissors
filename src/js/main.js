require('../css/main.scss');

import modules from './module';

document.getElementById("reset").addEventListener("click", () => {
  modules.resetGame();
});

const playButtons = document.getElementsByClassName("play-choice");

for (var i=0; i<playButtons.length; i++){
  const button = playButtons[i];
  const playerValue = i;
  button.addEventListener("click", () => {
    modules.playerMove(playerValue);
  });
}
