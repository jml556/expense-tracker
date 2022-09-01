import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpZCI6IjYzMGZkOGI3MWNjOGY5ZGFjZDYxNzU3YyIsImlhdCI6MTY2MjA3MDQwM30.7fsmxBVNXuTzcvS0E8p9qhtrLd9lLqTtx0NMhWgToc0";
const url = "http://localhost:3000/api";
const auth = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const fetchExpenses = () => axios.get(`${url}/expenses`, auth);

export const postExpense = (payload) =>
  axios.post(`${url}/expenses`, payload, auth);
