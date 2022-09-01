import { useState } from "react";
import { useDispatch } from "react-redux";
import { postExpense } from "../api";
import { getExpenseAction } from "../reducers/actions";

export const useInputHandler = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { onChange, value, setValue };
};

export const useFormSubmit = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getData = async (data) => {
    setLoading(true);
    try {
      await postExpense(data);
      dispatch(getExpenseAction());
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return { loading, getData };
};
