import React from "react";
import { useStore } from "./store/useStore";

export default function() {
  const { state, dispatch } = useStore();
  const inc = () => dispatch({ type: "increment" });
  const dec = () => dispatch({ type: "decrement" });

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={inc}>+ Increment</button>
      <button onClick={dec}>- Decrement</button>
    </div>
  );
}
