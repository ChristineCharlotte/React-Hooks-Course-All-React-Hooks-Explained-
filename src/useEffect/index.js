import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  // Called when page renders
  useEffect(() => {
    axios
      .get('http://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[count].email);
        console.log('API was called', response.data);
      });
  }, [count]);

  return (
    <>
      <div>Hello World! </div>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </>
  );
}

export default EffectTutorial;
