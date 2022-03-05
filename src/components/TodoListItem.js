import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoStatus, removeTodoItem } from '../store/action/actionCreators';
import './Todo.css';

export default function TodoListItem(props) {

  const dispatch = useDispatch();

  const removeTodo = (id) => {
    console.log(id);
    dispatch(removeTodoItem(id));
  };

  const changeState = (id) => {
    dispatch(changeTodoStatus(id))
  };

  return (
    <li>
      <input type="checkbox" checked={props.done} onChange={() => changeState(props.id)} /> { props.todoText }
      <span className='close' onClick={() => removeTodo(props.id)}>&times;</span>
    </li>
  )
}
