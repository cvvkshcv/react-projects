import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import { fetchPost } from './store/postSlice';
import { useEffect } from 'react';

function App() {
  const counterState = useSelector((state) => {
    return state.counter;
  });
  const { posts } = useSelector((state) => {
    return state.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(11));
  }, []);

  return (
    <div className="App">
      <p>Welcome Mr. {counterState.name} </p>
      <h1>Your power is: {counterState.counter} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <ul>
        <li>Hello</li>
        {
          posts && posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
