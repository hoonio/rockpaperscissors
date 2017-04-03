require('../css/main.scss');

import modules from './module';

modules.print('it works well!');

document.getElementById("reset").addEventListener("click", () => {
  modules.resetGame();
});
