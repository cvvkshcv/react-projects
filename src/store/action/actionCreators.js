import { ADD_TODO, ADD_TO_CART, CHANGE_STATUS_TODO, DECREMENT, FETCH_FAILED, INCREMENT, INIT_PROD, INIT_TODO_LIST, REMOVE_FROM_CART, REMOVE_TODO } from "./actionTypes";

export const incrementCount = (incrementBy) => {
  return { type: INCREMENT, payload: incrementBy }
};
export const decrementCount = (decrementBy) => {
  return { type: DECREMENT, payload: decrementBy }
};


export const initTodoList = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => data.json())
      .then(data => {
        const newData = data.map(todo => {
          todo.done = false;
          return todo;
        })
        dispatch({ type : INIT_TODO_LIST, payload: newData });
      })
  };
}

export const addTodoItem = (todo) => {
  return { type : ADD_TODO, payload: todo };
};

export const removeTodoItem = (id) => {
  return { type : REMOVE_TODO, payload: id };
};

export const changeTodoStatus = (id) => {
  return { type : CHANGE_STATUS_TODO, payload: id };
}

export const getAllProducts = () => {
  return (dispatch) => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(data => {
        const newData = data.map(todo => {
          todo.done = false;
          return todo;
        })
        dispatch({ type : INIT_PROD, payload: newData });
      })
      .catch(err => {
        dispatch({ type : FETCH_FAILED });
      })
  };
}


export const addToCartAction = (item) => {
  return { type: ADD_TO_CART, payload: item };
};

export const removeFromCartAction = (item) => {
  return { type: REMOVE_FROM_CART, payload: item };
};
