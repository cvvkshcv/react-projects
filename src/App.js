import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
function App() {

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: 'INC' });
  };

  return (
    <div className="App">
      <h1>React app</h1>

      <button onClick={handleInc}>Increment</button>

      <Child1 />
      <Child2 />
    </div>
  );
}

export default App;
