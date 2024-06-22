import React, { useState, useTransition } from "react";
function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    // it is like setting low priority to this for loop
    // everything else is high priority excepts the code in startTransition function
    // basically react will run all the high priority code and renders to the screen
    //and then low priority code is set
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {/* isPending will be true if there are any low priority task pending */}
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}

export default App;
