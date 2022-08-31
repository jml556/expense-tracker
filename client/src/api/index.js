import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpZCI6IjYzMGZkOGI3MWNjOGY5ZGFjZDYxNzU3YyIsImlhdCI6MTY2MTk4Mjk4NywiZXhwIjoxNjYyMDI2MTg3fQ.3GmUTC0Ui91_H_x5goKlZIANbjgjkwJFy7ffbyzWX3w";
const url = "http://localhost:3000/api";
const auth = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const fetchExpenses = () => axios.get(`${url}/expenses`, auth);

export const postExpense = (payload) =>
  axios.post(`${url}/expenses`, payload, auth);
