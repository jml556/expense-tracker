import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExpenseAction } from "./reducers/actions";
import Chart from "./components/Chart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseAction());
  }, []);

  return (
    <BrowserRouter>
      <div className="p-5 min-h-[100vh]">
        <Navbar />
        
        <div className="flex justify-center mt-7">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/expenses" element={<Chart />} />
            <Route path="/submit" element={<Form />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
