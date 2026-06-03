/* eslint-disable no-console */
const API_URL = 'http://165.227.135.101:8000/leaderboard?limit=10';

async function loadLeaderboard() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.log('API не ответил');
      throw new Error('API не ответил');
    }

    const data = await response.json();
    renderTable(data.leaders, data.updated_at);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

function renderTable(leaders, updatedAt) {
  console.log(leaders);
  console.log(updatedAt);
}

export { loadLeaderboard };
