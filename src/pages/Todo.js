import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === '') {
      return;
    }
    const newTodo = [...todos, {id: v4(), done: false, message: input}];
    setTodos(newTodo);
    setInput('');
  };

  const checkboxChanged = (todo) => {
    const updatedTodos = todos.map(_todo => {
      if (todo.id === _todo.id) {
        return {
          ..._todo,
          done: !_todo.done
        };
      } else {
        return _todo;
      }
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (todo) => {
    const latestTodos = todos.filter(_todo => {
      return todo.id !== _todo.id
    });
    setTodos(latestTodos);
  }


  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="todo" className="form-label">Enter todo item</label>
        <input
          value={input}
          type="text"
          className="form-control"
          id="todo"
          placeholder="Ex: Wake up at 5AM"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn btn-primary mt-3' onClick={addTodo}>Add todo</button>
      </div>

    {
      (todos.length === 0) ? (
        <div>
          Nothing to do today
        </div>
      ) : (
        <ul className="list-group">
          {
            todos.map((todo) => {
              return (<li key={todo.id} className="list-group-item">
                  <input type="checkbox" checked={todo.done} onChange={() => checkboxChanged(todo)} />
                  &nbsp; &nbsp; <span className={(todo.done) ? 'done' : '' }>{ todo.message }</span>
                  <button style={{ display: 'inline-block'}} className='btn btn-danger ml-5' onClick={() => removeTodo(todo)}>Delete</button>
                </li>)
            })
          }
        </ul>
      )
    }

    </div>  
  );
}

export default Todo;
