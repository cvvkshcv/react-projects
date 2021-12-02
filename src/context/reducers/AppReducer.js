import actionTypes from './actionTypes';

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT_LEVEL:
      const newStage = state.level + 1;
      const newBoxes = state.boxSize + 1;
      return {
        level: newStage,
        boxSize: newBoxes
      }
      break;
  
    default:
      break;
  }

};
export const initialPokemonState = {
  level: 1,
  boxSize: 2
};