import React, { useEffect, useRef, useState } from "react";

function UseRefHook() {
  const [name, setName] = useState("");
  // const renderCount = useRef(1); // returns {current: 0}

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>focus</button>
      {/* <div>i rendered {renderCount.current} times</div> */}
    </div>
  );
}

export default UseRefHook;
