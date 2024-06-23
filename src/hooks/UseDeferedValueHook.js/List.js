import React, { useMemo, useDeferredValue } from "react";

function List({ input }) {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(input);
  // it is like debouncing but there is not hardcoded time react does the time for us,
  // it is like setting a veriable as low priority it will run after some time after all the high priority is done
  // It allows you to postpone the rendering of a component until a specific condition is met.
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

// The useDeferredValue hook lets us to solve the slow render issue by adding a delay
// before some information is calculated. This works similarly to debouncing and throttling
//  in that our deferred value is calculated only after the necessary state modifications have
//   completed.
