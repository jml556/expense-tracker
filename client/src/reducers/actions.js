import { fetchExpenses } from "../api";

export const getExpenseAction = () => {
  return async (dispatch) => {
    const { data } = await fetchExpenses();
    dispatch({
      type: "FETCH_EXPENSES",
      payload: data,
    });
  };
};
