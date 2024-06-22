import React, { useMemo, useDeferredValue } from "react";

function List({ input }) {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(input);
  // it is like debouncing but there is not hardcoded time react does the time for us,
  // it is like setting a veriable as low priority it will run after some time after all the high priority is done

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  return list;
}

export default List;
