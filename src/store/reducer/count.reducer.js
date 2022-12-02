const initalState = {
  count: 0
};

export const countReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };
    case 'DEC':
      return { count: state.count - 1 };
    default:
      return state;
  }
}