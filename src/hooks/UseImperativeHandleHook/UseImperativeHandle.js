import React, { useState, useRef } from "react";
import CustomInput from "./hooks/UseImperativeHandleHook/CustomInput";
function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.alertHi()}>Alert</button>
    </div>
  );
}

export default App;
