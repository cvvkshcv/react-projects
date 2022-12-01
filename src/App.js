import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

function App() {
  const [name, setName] = useState("Vikash C V");
  const [hobby, setHobby] = useState("YouTube");
  const [role, setRole] = useState("UI Developer");
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Incr</button>
      <input type="text" onChange={(e) => setRole(e.target.value)} value={role} />
      <input type="text" onChange={(e) => setHobby(e.target.value)} value={hobby} />
      <Comp1 name={name} handleClick={handleClick} />
      <Comp2 role={role} hobby={hobby} />
    </div>
  );
}

export default App;
