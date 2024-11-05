// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import {
  decrement,
  increment,
  multiplier,
  selectCount,
  division,
  plusHundred,
} from "./store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  };
  const dec = () => {
    dispatch(decrement());
  };

  const mul = () => {
    dispatch(multiplier());
  };

  const divis = () => {
    dispatch(division());
  };
  const plusOneHundred = () => {
    dispatch(plusHundred());
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>Inc+</button>
      <button onClick={dec}>Dec-</button>
      <button onClick={mul}>Multiplication</button>
      <button onClick={divis}>division</button>
      <button onClick={plusOneHundred}>+ 100</button>
    </>
  );
}

export default App;
