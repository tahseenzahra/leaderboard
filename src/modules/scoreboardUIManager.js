import scoreList from './scorelist.js';

const refeshButton = document.querySelector('#refresh-btn');
refeshButton.addEventListener('click', async () => {
  refeshButton.disabled = true;
  await scoreList.list.syncScoreBoard();
  refeshButton.disabled = false;
});