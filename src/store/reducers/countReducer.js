export const countReducer = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'decrease':
      return state - 1;
    default:
      return state
  }
};