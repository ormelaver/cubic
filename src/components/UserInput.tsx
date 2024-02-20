import { useState } from 'react';

export default function UserInput({ placeHolderText, type, onChange }: any) {
  const [input, setInput] = useState();

  function handleChange(event: any) {
    setInput(event.target.value);
  }

  return (
    <div>
      <input
        type={type}
        required
        placeholder={placeHolderText}
        value={input}
        onChange={onChange}
      ></input>
    </div>
  );
}
