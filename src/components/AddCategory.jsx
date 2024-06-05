import { useState } from "react";

export default function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        onChange={onChange}
        value={inputValue}
      />
    </form>
  );
}
