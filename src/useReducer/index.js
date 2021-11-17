// import  { useState } from 'react'
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
// useReducer 同时修改多个State，相当于多个 useState
const ReducerTutorial = () => {
  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Toggle
      </button>

      {state.showText && <p>This is a text!</p>}
    </div>
  );
};

export default ReducerTutorial;
