// const Input = () => {
//   return "hello cocktail name";
// };

// export default Input;
import React, { useState } from "react";
//handleGetCocktail passed from parent in APP to child below so we can call it in handleSubmit
const Input = ({ handleGetCocktail }) => {
  const [cocktail, setCocktail] = useState("");
  const handleChange = (e) => {
    setCocktail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetCocktail(cocktail);
  };
  //form details
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Cocktail Name"
          type="text"
          name="Cocktail Input"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Input;
