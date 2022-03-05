import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, initTodoList } from '../store/action/actionCreators';
import './Todo.css';
import TodoListItem from './TodoListItem';

export default function Todo() {

  const todos = useSelector((store) => {
    return store.todo
  });

  const dispatch = useDispatch();

  const [todoTextInput, setTodoTextInput] = useState('');

  const addTodo = () => {
    dispatch(addTodoItem(todoTextInput));
    setTodoTextInput('');
  };

  useEffect(() => {
    dispatch(initTodoList());
  }, []);

  return (
    <div className='todo-container'>
      <h3>Todo list:</h3>

      <input
        type={'text'}
        value={todoTextInput}
        onChange={(e) => setTodoTextInput(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {
          todos.map(todo => {
            return <TodoListItem todoText={todo.title} key={todo.id} id={todo.id} done={todo.done} />
          })
        }
      </ul>
    </div>
  )
}
