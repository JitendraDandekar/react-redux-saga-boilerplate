import { DECREMENT, INCREMENT } from "../constants/actionTypes";

export const increment = (count) => {
  return {
    type: INCREMENT,
    payload: count + 1,
  };
};

export const decrement = (count) => {
  return {
    type: DECREMENT,
    payload: count - 1,
  };
};
