import React, { useState, useRef } from 'react';
import AutoFocusTextInput from './AutoFocusTextInput';
import Request from './Request';
import RequestAxios from './RequestAxios';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const textInput = useRef(null);

  const incrementCount = () => {
    // setCount(count + 1);
    textInput.current.focus();
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {/* <p>Count is currently {count}</p> */}
      <input type="text" ref={textInput} />
      <button onClick={incrementCount}>Click me</button>
      <hr />
      <AutoFocusTextInput />
      <hr />
      {/* <Request /> */}
      <RequestAxios />
    </div>
  );
}
