import { useId } from "react";

export default function EmailForm() {
  const id = useId();
  // The main use case of the useId hook is to generate unique ids for use within HTML elements.
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}
