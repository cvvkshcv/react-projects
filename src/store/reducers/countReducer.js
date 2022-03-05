import { DECREMENT, INCREMENT } from "../action/actionTypes";

export const countReducer = (state = 0, action) => {
  console.log('countReducer called ', action);

  if (action.type === INCREMENT) {
    return state + Number(action.payload);
  }
  if (action.type === DECREMENT) {
    return state - parseInt(action.payload, 10);
  }
  return state;
};

/*
const result = arr.reduce((acc, curr) => {
  return 10
})
*/