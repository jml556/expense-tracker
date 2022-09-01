import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExpenseAction } from "./reducers/actions";
import Chart from './components/Chart'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseAction());
  }, []);

  return (
    <div className="p-5 min-h-[100vh]">
      <Navbar />
      <Chart />
      <div className="flex justify-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
