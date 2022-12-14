// const Input = () => {
//   return "hello ";
// };

// export default Input;
import React from "react";
import { useState } from "react";

const Input = () => {
  const [ingriedient, setIngriedient] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Ingriedient"
          type="text"
          name="Ingriedient Input"
          onChange={(e) => setIngriedient(e.target.value)}
        />
      </label>
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Input;
