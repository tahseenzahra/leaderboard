import ScoreBoard from './scoreboard.js';
import displayUI from './initializeUI.js';

const scoreList = {};

(async () => {
  scoreList.list = await ScoreBoard.createScoreBoard('Fetch Easter Eggs');
  displayUI();
})();

export default scoreList;