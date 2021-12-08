import { useEffect, useReducer, useState } from 'react';
import {productReducer, initialState} from '../reducers/productReducer';
import './product.css';

function App() {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="shop">
      <div className="product-section">
        
        {
          products.length === 0 ? 'Loading...' : (
            products.map(product => {
              return (
                <div className="box">
                  <img src={product.image} alt={product.title} />
                  <div className="bottom">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <button>Add to cart +</button>
                  </div>
                </div>
              )
            })
          )
        }
      </div>
      <div className="cart-section">
        <h1>Cart</h1>
      </div>
    </div>
  );
}

export default App;
