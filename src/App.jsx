import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function App() {
  const [categories, setCategories] = useState(["One Punch"]);

  function onAddCategory(newCategory) {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>Gif Expert React</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
