import React, { useLayoutEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  // difference b/w useEffect and useLayout is useEffect is asynchronous
  // and effects are applied after the screen is painted
  // but useLayoutEffect is synchronous and run before the screen is pained

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> increment </button>
      <div>{count}</div>
    </div>
  );
}

export default App;
