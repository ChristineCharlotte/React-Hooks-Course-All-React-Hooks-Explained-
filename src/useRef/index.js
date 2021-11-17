import React, { useRef } from 'react';

const RefTutorial = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    // 获取input的值：Ref.current.value
    console.log(inputRef.current.value);
    alert(inputRef.current.value);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  const clear = () => {
    inputRef.current.value = '';
  };
  return (
    <>
      <h1>Title</h1>
      <input type="text" placeholder="Ex..." ref={inputRef}></input>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Get Value
      </button>
      <button
        onClick={() => {
          focus();
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        Clear
      </button>
    </>
  );
};

export default RefTutorial;
