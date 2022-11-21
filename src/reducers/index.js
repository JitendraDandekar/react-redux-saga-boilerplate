import { DECREMENT, INCREMENT } from "../constants/actionTypes";

const defaultState = {
  count: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
