import { useState } from "react";
import { AddCategories, ListCategorys } from "./components";

export const App = () => {

  const [categories, setCategories] = useState([]);

  const addCategory = category => {
    if (categories.includes(category)) return;
    setCategories([category,...categories]);
  };

  return (
    <>
      <h1 className="text-center mt-4">GifExpert</h1>
      <div className="container-xl">
        <AddCategories addCategory={addCategory} />

        
          {categories.map(category => (
            <ListCategorys key={ category } category= { category }/>
        ))}
        
      </div>

    </>
  )
}
