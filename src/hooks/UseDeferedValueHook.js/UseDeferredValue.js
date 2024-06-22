import React, { useState } from "react";
import List from "./hooks/UseDeferedValueHook.js/List";
function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  );
}

export default App;
