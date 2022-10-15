import './style.css';
import showScoreList from './module/showListData.js';
import postGameData from './module/postGameData.js';

const reloadButton = document.getElementById('refresh-btn');
reloadButton.addEventListener('click', (e) => {
  showScoreList();
});
window.addEventListener('load', () => {
  showScoreList();  
}, false);
const submitButton = document.getElementById('form-submit-btn');
const Name = document.getElementById('form-name');
const Score = document.getElementById('form-score');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (Name.value !== '' && Score.value !== ''){
  postGameData(showScoreList, Name.value, Score.value);
  }
  Score.value = '';
  Name.value = '';
});
