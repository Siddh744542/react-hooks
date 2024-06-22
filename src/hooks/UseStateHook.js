import React, { useState } from "react";
function UseStateHook() {
  // const [count, setCount] = useState(0);// this runs everytime the component render
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 0;
  });

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="UseStateHook">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UseStateHook;
