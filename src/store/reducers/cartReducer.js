import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/actionTypes";

const initalValue = {
  totalAmount: 0,
  totalItems: 0,
  items: []
};

export const cartReducer = (state = initalValue, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const payloadItem = action.payload;
      const itemExists = state.items.find(item => {
        return item.id === payloadItem.id
      });
      if (itemExists) {
        const newItems = state.items.map(item => {
          if (item.id === payloadItem.id) {
            return {
              ...item,
              count: item.count + 1
            }
          }
          return item;
        });
        const totalAmount = newItems.reduce((acc, curr) => {
          return acc + (curr.price * curr.count);
        }, 0);
        return {
          ...state,
          totalAmount,
          items: newItems
        };
      }
      const newItems = [...state.items, {...payloadItem, count: 1}];
      const totalAmount = newItems.reduce((acc, curr) => {
        return acc + (curr.price * curr.count);
      }, 0);
      return {
        ...state,
        items: newItems,
        totalAmount: totalAmount,
        totalItems: newItems.length
      }
    case REMOVE_FROM_CART:
      // TODO: Implement the remove from cart
      break;
  
    default:
      break;
  }
  return state;
};