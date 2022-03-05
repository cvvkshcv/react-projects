import { ADD_TODO, CHANGE_STATUS_TODO, INIT_TODO_LIST, REMOVE_TODO } from "../action/actionTypes";

const initalState = [
  {
    id: 1,
    title: 'Teaching React & Redux',
    done: true
  },
  {
    id: 2,
    title: 'Check my inbox and linkedIn',
    done: false
  }
];
let id = 3;
export const todoReducer = (state = initalState, action) => {
  console.log('todoReducer called ', action);
  switch(action.type) {
    case INIT_TODO_LIST:
      return action.payload || state;
    case ADD_TODO:
      id++;
      return [...state, { id: id, title: action.payload, done: false}]; // return something over here
    case REMOVE_TODO:
      const newTodoList = state.filter(todo => {
        return todo.id !== action.payload
      });
      return newTodoList;
    case CHANGE_STATUS_TODO:
      const todoId = action.payload;
      const updatedTodo = state.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      });
      return updatedTodo;
  }
  return state;
};
/*
1. Add todo list
2. Remove todo list
3. update todo list with done/not done
*/