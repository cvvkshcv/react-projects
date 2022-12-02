import { useDispatch } from "react-redux";

function GrandChild2() {
  
  const dispatch = useDispatch();

  const handleDEC = () => {
    dispatch({ type: 'DEC' });
  };

  return (
    <div className="border">
      <h3>GrandChild2</h3>
      <button onClick={handleDEC}>Decrement</button>
    </div>
  )
}

export default GrandChild2