import { useCallback, useState } from "react";
import "./App.css";
import Product from "./components/Product";
function App() {
  const [prod, setprod] = useState(["prod 1", "prod 2"]);
  const [count, setcount] = useState(0);
  const [cart, setcart] = useState(0);

  const addToCart = useCallback(() => {
    setcart(cart + 1);
  }, [cart]);

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button onClick={() => setcount(count + 1)}>+ count</button>

      <h3>Cart : {cart}</h3>

      <div className="prod-wrapper">
        {prod.map((p, i) => {
          return <Product name={p} addToCart={addToCart} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
