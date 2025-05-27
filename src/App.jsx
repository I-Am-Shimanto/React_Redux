import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increment } from "../store/slices/CounterSlices";

const App = () => {
  const counter = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

export default App;
