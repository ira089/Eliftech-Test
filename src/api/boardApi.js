import axios from 'axios';
axios.defaults.baseURL = 'https://eliftech-test-server.onrender.com/api';

export const fetchBoards = async ({ page }) => {
  const { data } = await axios.get(`/boards?&page=${page}&limit=12`);

  return data;
};
