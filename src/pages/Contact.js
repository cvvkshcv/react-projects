import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Contact() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  return <>
    <div>{count}</div>
    <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
    <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
  </>;
}

export default Contact;
