require('../css/main.scss');

import modules from './module';

modules.print('it works well!');

document.getElementById("reset").addEventListener("click", () => {
  modules.resetGame();
});

const playButtons = document.getElementsByClassName("play-choice");

for (var i=0; i<playButtons.length; i++){
  const button = playButtons[i];
  button.addEventListener("click", () => {
    modules.playerMove(button.id);
  });
}

// playButtons.forEach((button) => {
//   console.log(button.id)
// })

// addEventListener("click", () => {
//   console.log(this);
//   modules.resetGame();
// });
