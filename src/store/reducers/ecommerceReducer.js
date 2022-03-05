import { FETCH_FAILED, FETCH_NEW_DATA, INIT_PROD } from "../action/actionTypes";

const initialState = {
  loading: true,
  error: false,
  items: []
};

export const ecommerceReducer = (state = initialState, action) => {
  console.log('ecommerceReducer ', action)
  switch (action.type) {
    case INIT_PROD:
      return {
        loading: false,
        error: false,
        items: action.payload
      };
    
    case FETCH_FAILED:
      return {
        loading: false,
        error: true,
        items: []
      };
    
    case FETCH_NEW_DATA:
      return {
        ...state,
        loading: true
      }
  
    default:
      return state;
  }
}