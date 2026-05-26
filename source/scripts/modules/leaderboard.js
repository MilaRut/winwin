/* eslint-disable no-console */
const API_URL = 'http://165.227.135.101:8000/leaderboard';

async function loadLeaderboard(limit = 10) {
  try {
    const response = await fetch(`${API_URL}}?limit=${limit}`);
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
