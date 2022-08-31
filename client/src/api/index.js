import axios from 'axios';

const url = 'localhost:3000/api';

export const fetchExpenses = () => axios.get(`${url}/users`);

export const postExpense = (payload) => axios.post(`${url}/users`, payload)