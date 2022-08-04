import { combineReducers } from "redux";

const defaultExpense = {
  expenses: [],
};

const defaultUser = {
  name: "",
  isLoggedIn: false,
};

const expenseReducer = (prevState = defaultExpense, action) => {
  switch (action.type) {
    case "UPDATE_EXPENSE":
      return [...prevState];
    default:
      return prevState;
  }
};

const userReducer = (prevState = defaultUser, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        isLoggedIn: true
      };
    case "LOG_OUT":
      return {
        ...prevState,
        isLoggedIn: false
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default combineReducers({
  expenses: expenseReducer,
  user: userReducer
});
