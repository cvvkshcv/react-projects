import { useEffect, useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import Todo from './components/Todo'; 
import Header from './components/Header';
import { getAllProducts } from './store/action/actionCreators';
import Card from './components/Card';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch();
  // let [count, setCount] = useState(5);
  // const store = useSelector((store) => {
  //   return store;
  // });
  // const increaseCount = () => {
  //   count++;
  //   console.log(count);
  // };

  const shop = useSelector((store) => {
    console.log(store.shop);
    return store.shop;
  });

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // E-commerce part
  
  return (
    <>
      <Header />
      <div className="container">
        {
          shop.error ? 'Server error try after sometime' : (
            shop.loading ? <Loading /> : (
              <div className="row">
                  {
                    shop.items.map((item) => {
                      return <Card item={item} key={item.id} />
                    })
                  }
                </div>
            )
          )
        }
        
      </div>
    </>
  );

  // Count and todo section
  // return (
//     <div className="container">  
//       <h1>Hello React and redux { store.count }</h1>
//       <h3>Hello my name is { store.name }</h3>
//       <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
//       <button onClick={() => dispatch(incrementCount(1))}>Increase by 1</button>
//       <button onClick={() => dispatch(incrementCount(count))}>Increase by {count}</button>
//       <button onClick={() => dispatch(decrementCount(1))}>Decrement by 1</button>
//       <button onClick={() => dispatch(decrementCount(count))}>Decrement by {count}</button>
//       <hr />
//       <Todo />
//     </div>
  // );
}

export default App;
