import React, { useState, useMemo, useEffect } from "react";

function UseMemoHook() {
  // With useMemo, React can store the result of a function call and reuse
  // it when the dependencies of that function haven't changed, rather than
  //  recalculating the value on every render.

  // difference between useMemo and useCallback is useMemo only stores the
  // return value of the number on the other hand useCallback store the whole function
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changes");
  }, [themeStyles]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
export default UseMemoHook;
