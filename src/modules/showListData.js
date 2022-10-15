import getGameData from './getGameData.js';

const ScoreList = document.getElementById('score-list');
// Score List Element Creation here
const ShowScoreList = (elements) => {
  const div = `<li class="list-section">
                        <h4 class="list-name">${elements.user} &nbsp : <span> ${elements.score} </span></h4>
                </li><hr>`;
  const ListElements = ScoreList.innerHTML + div;
  ScoreList.innerHTML = ListElements;
};

const DisplayGameData = async () => {
  const data = await getGameData();
  ScoreList.textContent = '';
  data.forEach((Gamedata) => {
    ShowScoreList(Gamedata);
  });
};

export default DisplayGameData;