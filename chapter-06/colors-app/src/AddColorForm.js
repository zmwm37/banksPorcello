import Redact, { useState } from "react";
import { useInput } from './hooks/useInput.js'

export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000")

  const submit = e => {
    e.preventDefault();
    //values to parent
    onNewColor(titleProps.value, colorProps.value);
    //reset values after passing to parent
    resetTitle("");
    resetColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps} // spread value from useInput custom hook
        type = "text"
        placeholder = "color title..."
        required
      />
      <input
      {...colorProps} // spread value from useInput custom hook
        type = "color"
        required
      />
      <button>ADD</button>
    </form>
  );
}
