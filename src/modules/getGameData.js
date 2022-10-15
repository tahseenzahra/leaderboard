const getGameData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ii7sFEgMEeenrHZBS7wX/scores/');
  const res = await response.json();
  return res.result;
};

export default getGameData;