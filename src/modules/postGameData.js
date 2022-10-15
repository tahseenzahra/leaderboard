const postGameData = async (ShowDataUI, Name, scor) => {
  const body = JSON.stringify({ user: Name, score: scor });
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ii7sFEgMEeenrHZBS7wX/scores/';
  const response = await fetch(url, { method: 'POST', body, headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  const res = await response.json();
  ShowDataUI();
  return res.result;
};

export default postGameData;