import { useLayoutEffect, useEffect, useRef } from 'react';

function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  //useEffect() is called after you render the page
  useEffect(() => {
    console.log('useEffect');
    console.log('changed value', inputRef.current.value);
  });

  // useLayOutEffect() is called Before you render the apge
  useLayoutEffect(() => {
    console.log('inital value', inputRef.current.value);
    console.log('useLayoutEffect');
    inputRef.current.value = 'Hello';
  });

  return (
    <>
      <div>
        <input
          ref={inputRef}
          value="PEDRO"
          style={{ width: 400, height: 400 }}
        ></input>
      </div>
    </>
  );
}

export default LayoutEffectTutorial;
