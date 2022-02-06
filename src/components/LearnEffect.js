import React from 'react';
import { useEffect } from "react";
import { useState } from 'react/cjs/react.development';

function LearnEffect({ count, count1 }) {

  const [total, setTotal] = useState(count +  count1);

  useEffect(() => {
    console.log('Some prop got changed!!!! I want to tell you that!');
  });

  useEffect(() => {
    console.log('Welcome to my component');
  }, []);

  useEffect(() => {
    console.log('The count is now changed ' + count);
  }, [count]);

  useEffect(() => {
    console.log('The count 1 is now changed ' + count1);
  }, [count1]);

  useEffect(() => {
    setTotal(count + count1);
  }, [count, count1]);

  return <div>
      <p>The count: { count }</p>
      <p>The count1 { count1 }</p>
      <h3>Total : { total }</h3>
    </div>;
}

export default LearnEffect;
