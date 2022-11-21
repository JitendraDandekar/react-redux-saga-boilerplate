import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../actions";

const ButtonStyle = {
  padding: "20px 40px",
  margin: "20px 40px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export function IncreamentButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      style={ButtonStyle}
      onClick={() => {
        dispatch(increment(props.count));
      }}
    >
      +
    </button>
  );
}

export function DecrementButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      style={ButtonStyle}
      onClick={() => {
        dispatch(decrement(props.count));
      }}
    >
      -
    </button>
  );
}
