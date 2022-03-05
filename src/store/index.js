import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { countReducer } from "./reducers/countReducer";
import { ecommerceReducer } from "./reducers/ecommerceReducer";
import { nameReducer } from "./reducers/nameReducer";
import { todoReducer } from "./reducers/todoReducer";

export const allReducers = combineReducers(
  {
    count: countReducer,
    name: nameReducer,
    todo: todoReducer,
    shop: ecommerceReducer,
    cart: cartReducer
  }
);

/*
store:

store = {
  count: 2,
  name: 'Vikash',
  todo: [],
  shop: {
    loading: true,
    error: false,
    items: []
  },
  cart: {
    totalAmount: 0,
    totalItems: 0,
    items: []
  }
}
*/