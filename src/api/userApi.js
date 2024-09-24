import axios from 'axios';
axios.defaults.baseURL = 'https://eliftech-test-server.onrender.com/api';

export const fetchUsers = async () => {
  const { data } = await axios.get(`/users`);
  return data;
};

export const fetchUserAdd = async body => {
  const { data } = await axios.post(`/users`, body);

  return data;
};
