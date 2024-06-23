import { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useDebugValue(value, (v) => getValueSlowly(v)); // now this function will only gets called when we are debugging
  // only used for custom hooks
  //The useDebugValue hook is simply used to print out debug information for custom hooks.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;

function getValueSlowly(value) {
  for (let i = 0; i < 30000000; i++) {}
  return value;
}
