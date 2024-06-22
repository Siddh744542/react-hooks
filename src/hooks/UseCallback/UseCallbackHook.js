import React, { useState, useCallback } from "react";
import List from "./hooks/UseCallback/List";
function UseCallbackHook() {
  // seCallback is a React Hook that lets you cache a function definition between re-renders.
  // difference between useMemo and useCallback is useMemo only stores the
  // return value of the number on the other hand useCallback store the whole function
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallbackHook;
