import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { getExpenseAction } from "./reducers/actions";
import Chart from "./components/Chart";
import { themeContext } from "./context";

function App() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useContext(themeContext);

  const toggleTheme = () =>
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });

  useEffect(() => {
    dispatch(getExpenseAction());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex justify-center mt-7">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/expenses" element={<Chart />} />
          <Route path="/submit" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
