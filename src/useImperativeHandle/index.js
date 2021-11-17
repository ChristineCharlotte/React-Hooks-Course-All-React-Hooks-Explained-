import React, { useRef } from 'react';
import Button from './Button';

// 使用命令式处理
function ImperativeHandle() {
  const buttonRef = useRef(null);

  return (
    <>
      <h3>useImperativeHandle</h3>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button parent
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button ref={buttonRef} />
    </>
  );
}

export default ImperativeHandle;
